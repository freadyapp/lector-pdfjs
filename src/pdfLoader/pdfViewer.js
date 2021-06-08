import { _e, _p, Pragma } from "pragmajs";
import { PDF } from "./PDF";
import { textFuckery } from "../utilities/brokeDetector";
import { _thread } from "pragma-thread";

import Mousetrap from "mousetrap";

import TextLayerBuilder from "../pdfjs/build/textLayer";

let resolution = 1;
let scale = 1;
let enhanceTextSelection = false;

// let _thr = _thread() // thread is a pragma
//   .on("execute", (fn) => {
//     console.time(fn);
//   })
//   .on("done", (fn) => {
//     console.timeEnd(fn);
//   });

// _thr.define({
//   PDF() {
//     return PDF;
//   },
// });

export class PDFViewer extends Pragma {
  constructor(element) {
    super();

    this.as(element);
    this.scale = 1;

    this.createEvents("load", "render");

    this.css("transform-origin top");
  }

  set scale(n) {
    this._scale = Math.min(Math.max(0.3, n), 3);
    this.scaleTo(this._scale);
  }

  get scale() {
    return this._scale;
  }

  scaleTo(value) {
    this.element.css(`transform scale(${value})`);
  }

  scaleUp() {
    this.scale += 0.05;
  }

  scaleDown() {
    this.scale -= 0.05;
  }

  loadFromUrl(url) {
    return this.load(PDF.fromUrl(url));
  }

  async getTextOfPage(pageIndex) {
    let page = await this.pdf.getPage(pageIndex);
    let content = await page.getTextContent();

    return {
      get str() {
        return content.items?.reduce((last, obj) => last + obj.str, "");
      },

      toString() {
        return this.str;
      },
    };
  }

  createPage(pageIndex) {
    return new Promise((resolve) => {
      this.pdf.getPage(pageIndex).then(async (page) => {
        console.time(`creating page ${page._pageIndex}`);
        // console.time(`creating view ${page._pageIndex}`)
        let viewport = page.getViewport({ scale: resolution });
        // console.timeEnd(`creating view ${page._pageIndex}`)
        // console.log('viewport is', viewport)
        // var pageDiv = _e(`div.#page-${page._pageIndex+1}`)

        // console.time(`creating html ${page._pageIndex}`)
        let pageDiv = document.createElement("div");
        pageDiv.id = `page-${page._pageIndex + 1}`;
        pageDiv.style.position = "relative";

        // .css("position: relative")

        // var pagedDiv = document.createElement("div")

        let canvas = document.createElement("canvas");
        pageDiv.appendChild(canvas);
        // var canvas = _e("canvas.").appendTo(pageDiv)

        let context = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // canvas.css(`
        //     width ${viewport.width/resolution}px
        //     height ${viewport.height/resolution}px
        // `)
        canvas.style.width = `${viewport.width / resolution}px`;
        canvas.style.height = `${viewport.height / resolution}px`;

        var renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        // console.timeEnd(`creating html ${page._pageIndex}`)

        // console.time(`getting text ${page._pageIndex}`)

        let textContent = await page.getTextContent();
        // console.timeEnd(`getting text ${page._pageIndex}`)
        // console.log(textContent)
        // console.time(`string ${page._pageIndex}`)
        // let textContentJSON = JSON.stringify(textContent)
        // console.log(textContentJSON)
        // console.timeEnd(`string ${page._pageIndex}`)

        // console.time(`parse ${page._pageIndex}`)
        // let textContentParse = JSON.parse(textContentJSON)
        // console.timeEnd(`parse ${page._pageIndex}`)
        // let textContentJSON = JSON.stringify(textContent)

        //console.log('text content is', textContent.items.reduce((last, obj) => { return last + obj.str }, " "))
        //console.log(textContent)

        let canvasOffset = canvas.offset();
        console.log("canvas offset is", canvasOffset);

        let textLayerDiv = document.createElement("div");
        textLayerDiv.classList.add("textLayer");
        textLayerDiv.style.transformOrigin = "top left";
        textLayerDiv.style.transform = `scale(${1 / resolution})`;
        pageDiv.appendChild(textLayerDiv);

        // let textLayerDiv = _e('div.textLayer#')
        //                     .css(`transform-origin top left; transform `)
        //                     .appendTo(pageDiv)

        let textLayer = new TextLayerBuilder({
          textLayerDiv,
          pageIndex: page.pageIndex,
          viewport,
          enhanceTextSelection,
        });

        textLayer.setTextContent(textContent);

        textLayer.render();

        await page.render(renderContext).promise;
        resolve(pageDiv);

        console.timeEnd(`creating page ${page._pageIndex}`);
      });
    });
  }

  async loadAndRender(pdf) {
    this.load(pdf);
  }

  async load(pdf) {
    this._loading = true;

    this.pdf = await pdf;

    this._loading = false;
    this.triggerEvent("load");
    return this.pdf;
  }

  getPage(i) {
    let self = this;
    return {
      get index() {
        return i;
      },
      get text() {
        return self.getTextOfPage(i);
      },
    };
  }

  get pages() {
    return (function* (self) {
      for (let i = 1; i <= self.pdf.numPages; i += 1) {
        yield self.getPage(i);
      }
      return self.pdf.numPages;
    })(this);
  }

  async checkIfBroken(accuracy = 20, threshold = 0.5) {
    console.log("evaluating if pdf is broken");
    console.time("is pdf broken");
    // return false
    // let txt = await this.getTextOfPage(1)

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    accuracy = Math.min(accuracy, this.pdf.numPages);
    const getRandomRange = () => {
      let range = new Set();
      for (let i = 0; i < accuracy; i++) {
        range.add(getRandomInt(this.pdf.numPages) + 1);
      }

      return range;
    };

    let range = getRandomRange();
    let totalFuckery = 0;
    for (let index of range) {
      let page = this.getPage(index);
      //console.log('page is', page)
      let text = (await page.text).str;
      totalFuckery += await textFuckery(text);
    }

    console.timeEnd("is pdf broken");
    const totalFuckeryIndex = totalFuckery / range.size;
    console.log("total fuckery index fund", totalFuckeryIndex);
    return totalFuckeryIndex > threshold;
  }

  unclutterTextLayer(
    textLayer,
    {
      paddingMagnitude = 0.07,
      lineHeight = 1.1,
      cleanCb = (span) => span.remove(),
    }
  ) {
    return new Promise((resolve) => {
      let previousTop = null;
      let previousHeight = null;
      let previousAccepted = false;

      let tTop = textLayer.offset().top;
      let tBot = tTop + textLayer.offsetHeight;

      let padding = paddingMagnitude * textLayer.offsetHeight;
      textLayer.querySelectorAll("span").forEach((span) => {
        // span.addEventListener('click', () => {
        let sTop = span.offset().top;
        let sBot = sTop + span.offsetHeight;
        if (
          (previousTop &&
            !(previousTop + previousHeight / 2 < sTop) &&
            !previousAccepted) ||
          ((sTop < tTop + padding || sBot > tBot - padding) &&
            !(
              previousTop &&
              previousHeight &&
              sTop - lineHeight * previousHeight < previousTop
            ))
        ) {
          // span.classList.add("ignore")
          cleanCb && cleanCb(span);
          previousAccepted = false;
        } else {
          previousAccepted = true;
        }

        previousTop = sTop;
        previousHeight = span.offsetHeight;
        // })
      });

      resolve();
    });
  }
}
