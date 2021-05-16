import { _e, _p, Pragma } from 'pragmajs'
import { PDF } from "./PDF"
import { textFuckery } from "../utilities/brokeDetector"

import Mousetrap from 'mousetrap'

import TextLayerBuilder from "../pdfjs/build/textLayer"

let resolution = 4
let scale = 1
let enhanceTextSelection = false

export class PDFViewer extends Pragma {
    constructor(element){
        super()

        this.as(element)
        this.scale = 1

        this.createEvents('load', 'render')
        
        this.css('transform-origin top')
    }

    set scale(n){
        this._scale = Math.min(Math.max(0.3, n), 3)
        this.scaleTo(this._scale)
    }
    
    get scale(){
        return this._scale
    }

    scaleTo(value){
        this.element.css(`transform scale(${value})`)
    }

    scaleUp(){
        this.scale += 0.05
    }
    
    scaleDown(){
        this.scale -= 0.05
    }


    loadFromUrl(url){
        return this.load(PDF.fromUrl(url))
    }
    
    async getTextOfPage(pageIndex) {
      let page = await this.pdf.getPage(pageIndex)
      let content = await page.getTextContent()
      
      return {
        get str() {
          return content.items?.reduce((last, obj) => last + obj.str, "")
        },

        toString() {
          return this.str
        }
      }
    }

    createPage(pageIndex){
        return new Promise(resolve => {
            this.pdf.getPage(pageIndex)
                .then(async page => {
                    var viewport = page.getViewport({ scale: resolution });
                    var pageDiv = _e(`div.#page-${page._pageIndex+1}`)
                                    .css("position: relative")

                    var canvas = _e("canvas.").appendTo(pageDiv)

                    var context = canvas.getContext('2d')

                    canvas.height = viewport.height
                    canvas.width = viewport.width
                    
                    canvas.css(`
                        width ${viewport.width/resolution}px
                        height ${viewport.height/resolution}px
                    `)

                    var renderContext = {
                      canvasContext: context,
                      viewport: viewport
                    }


                    let textContent = await page.getTextContent()
                  //console.log('text content is', textContent.items.reduce((last, obj) => { return last + obj.str }, " "))
                  //console.log(textContent)

                    let canvasOffset = canvas.offset()
                    console.log('canvas offset is', canvasOffset)
                    let textLayerDiv = _e('div.textLayer#')
                                        .css(`transform-origin top left; transform scale(${1/resolution})`)
                                        .appendTo(pageDiv)

                    let textLayer = new TextLayerBuilder({
                        textLayerDiv,
                        pageIndex: page.pageIndex,
                        viewport,
                        enhanceTextSelection,
                    })

                    textLayer.setTextContent(textContent)

                    textLayer.render()

                    await page.render(renderContext).promise
                    resolve(pageDiv)
                  })
                })
    }

    async loadAndRender(pdf){
        this.load(pdf)
    }

    async load(pdf){
        this._loading = true

        this.pdf = await pdf

        this._loading = false
        this.triggerEvent('load')
        return this.pdf
    }

    getPage(i) {
      let self = this
       return ({
        get index() {
          return i
        },
        get text() {
          return self.getTextOfPage(i)
        }
      })
    }

    get pages() {
      return (function* (self){
        for (let i = 1; i <= self.pdf.numPages; i += 1) {
            yield self.getPage(i);
        }
        return self.pdf.numPages;
      })(this)
    }

    async checkIfBroken(accuracy=20, threshold=0.5) {
      console.log('evaluating if pdf is broken')
      let txt = await this.getTextOfPage(1)

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      accuracy = Math.min(accuracy, this.pdf.numPages)
      const getRandomRange = () => {
        let range = new Set()
        for (let i = 0; i < accuracy; i++) {
          range.add(getRandomInt(this.pdf.numPages)+1) 
        }

        return range
      }

      let range = getRandomRange()
      console.log('range is', range)
      let totalFuckery = 0
      for (let index of range) {
        let page = this.getPage(index)
        //console.log('page is', page)
        let text = (await page.text).str
        totalFuckery += await textFuckery(text)
      };

      console.timeEnd('is pdf broken')
      return totalFuckery/range.size > threshold
    }
}

