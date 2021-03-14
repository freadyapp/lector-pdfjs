import { _e, _p, Pragma } from 'pragmajs'
import { PDF } from "./PDF"

import Mousetrap from 'mousetrap'

import TextLayerBuilder from "../pdfjs/build/textLayer"


//var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.

// The workerSrc property shall be specified.

let resolution = 4
let scale = 1

export class PDFViewer extends Pragma {
    constructor(element){
        super()
        this.as(element)
        this.scale = 1

        this.createEvents('load', 'render')
        
        this.css(`
            transform-origin top
            transition all .08s ease
        `
        )
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
    
    createPage(pageIndex){
        return new Promise(resolve => {
            this.pdf.getPage(pageIndex)
                .then(page => {
                    var viewport = page.getViewport({ scale: resolution });
                    var pageDiv = _e(`div.#page-${page._pageIndex+1}`)
                                    .css("position: relative")
                              //.appendTo(this)

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

                  // Render PDF page
                    page.render(renderContext).promise.then(function () {
                        return page.getTextContent() // Get text-fragments
                    }).then(function (textContent) {
                        // Create div which will hold text-fragments
                        var textLayerDiv = _e("div.textLayer#")

                        textLayerDiv.css(`
                           transform-origin top left
                           transform scale(${1/resolution})
                        `)

                        pageDiv.append(textLayerDiv)

                        // Create new instance of TextLayerBuilder class
                        var textLayer = new TextLayerBuilder({
                            textLayerDiv: textLayerDiv,
                            pageIndex: page.pageIndex,
                            viewport: viewport
                        });

                        // Set text-fragments
                        textLayer.setTextContent(textContent);

                        // Render text-fragments
                        textLayer.render();
                        
                        resolve(pageDiv)
                      })
                    })
                })
    }

    render(){
       
        console.log(`viewing pdf`, this.pdf)
        let pages =[]
        for (var i = 10; i <= 20; i++) {
            pages.push(this.createPage(i))
        }

        console.log(pages)
        let final = pages.length-1
        pages.forEach((page, i) => page.then(data => {
            console.log('appending yoing')
            this.append(data)
            if (i == final) this.triggerEvent('render')
        }))
    }
    
    async loadAndRender(pdf){
        this.load(pdf)
    }

    async load(pdf){
        //pdf is of type PDF or promise
        this._loading = true

        this.pdf = await pdf

        this._loading = false
        this.triggerEvent('load')
        return this.pdf
    }
}

//var container = _p().as("#the-canvas")



//loadPdf(url)
  //.then(function(pdf) {
    //// Get div#container and cache it for later use
    ////container.css(`transform scale(${1/scale})`)

    //// Loop from 1 to total_number_of_pages in PDF document
    ////for (var i = 1; i <= pdf.numPages; i++) {
    
//})

