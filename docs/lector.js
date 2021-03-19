// import { Lector } from '../src'
// import { Word } from "../src/lector"


globalThis.pragmaSpace.integrateMousetrap(Mousetrap)
let _e = lectorPdf.pragma._e
let _p = lectorPdf.pragma._p

lectorPdf.lector.globalify()
lectorPdf.injectStyles()

let pdfs = {
  "algorythms": "https://freadypublic.s3.eu-central-1.amazonaws.com/Data+Structures+and+Algorithms+in+Java%2C+6th+Edition%2C+2014.pdf",
  "energy star": "https://freadypublic.s3.eu-central-1.amazonaws.com/ENERGY+STAR.pdf",
  "reasoning and logic": "/docs/pdfs/dicks.pdf",
  "fready": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/cover+pdf.pdf",
  "schema": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/dbass2pages.pdf",
  "accounting": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/Financial+Accounting.pdf",
  "economics": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/Modern+Principles+of+Economics+copy.pdf",
  "psopy psopy": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/Organizational+Behaviour+17th+Edition.pdf"

}

let lectorController = _p().createEvent("create")

let params = _p()
    .createWire('params')
    .as('#pdf-selector')
    .run(
      function() {
        this.set = (key, value) => {
          let url = new URL(window.document.location);
          let params = new URLSearchParams(url.search.slice(1));

          if (params.has(key)) {
            params.set(key, value);
          } else {
            params.append(key, value);
          }
          
          url.search = params;
          url = url.toString();
          history.pushState({}, null, url);

          this.setParams({[key]: value})
        }
        this.get = (key) =>{
          let url = new URL(window.document.location);
          let params = new URLSearchParams(url.search.slice(1));

          return params.get(key)
        }
      }
    ).run(function(){
      Object.keys(pdfs).forEach(pdf => {
        let element = _e(`div.`, pdf).listenTo('click', () =>{
          this.set("pdfName", pdf) 
          location.reload()   
        }).html(`<div class='option'>${pdf}</div>`)
          .setData({"option": pdf})

        this.append(element)
      })
    })


lectorController.on("create", function(pdfName){
  console.log('iniating pdf', pdfName)
  initateFromPdfUrl(pdfs[pdfName])
})

params.on('paramsChange', function(params){
  this.element.findAll('.option').forEach(option => option.removeClass('selected'))
  this.element.find(`[data-option='${params.pdfName}']`).find('.option').addClass('selected')
  lectorController.triggerEvent("create", params.pdfName)
})

// console.log(params.get('pdfName'))
let pdfNameParam = params.get('pdfName')
console.log(pdfNameParam)
pdfNameParam = pdfNameParam || "algorythms"
console.log(pdfNameParam)
params.set("pdfName", pdfNameParam)


function initateFromPdfUrl(url){
    
  let viewer = new lectorPdf.PDFViewer("#the-canvas")
  Mousetrap.bind("o", () => viewer.scaleUp())
  Mousetrap.bind("shift+o", () => viewer.scaleDown())

  // var url = "/docs/pdfs/dicks.pdf"
  // var url = "https://freadypublic.s3.eu-central-1.amazonaws.com/ENERGY+STAR.pdf"

  globalThis.pragmaSpace.onDocLoad(() =>{
    viewer.loadFromUrl(url)
  })

  function fetchContent(pageIndex){
    return new Promise(resolve => resolve(pageIndex))
    // return new Promise(resolve => {
    //   viewer.createPage(pageIndex).then(page => {
    //     resolve(page.html())
    //   })
    // })
  }

  viewer.on('load', () => {
    console.log('view rendered')

    let settings = {
        wfy: false,

        fullStyles: true,
        defaultStyles: true,

        settings: true,
        experimental: true,

        stream: fetchContent,
        // function with index as param that
        // returns the content for the page
        // can return a promise

        paginate: {
          from: 'stream',
          as: 'infiniteScroll',
          config: {
            first: 1,
            last: viewer.pdf.numPages,
            onCreate: (p, index) => {
              //p.css("background lightgray")
              //console.log(p)
              p.addClass('lector-page', 'loading')
              p.setData({ index: index })
            },

            onFetch: (p, index) => {
              console.log('p has been fetched', index)
              let loader = lectorPdf.utilities.loader(1).appendTo(p)
              loader.style.opacity = '.5'

    //   viewer.createPage(pageIndex).then(page => {
    //     resolve(page.html())
    //   })   
              viewer.createPage(index).then(pdfPage => {
                p.append(pdfPage)
                loader.destroy()
                p.removeClass('loading')
              })
              //_e('body').findAll('.textLayer').forEach(textLayer => lectorPdf.wfy(textLayer))
              p.self_activate = function () {
                console.log('self activating', p)
                if (!p.word) {
                  p.findAll('.textLayer').forEach(textLayer => lectorPdf.wfy(textLayer))
                  p.word = lectorPdf.Word(p).setKey(index)
                  //// generate lector for the page
                  //lector.helpers.wfy(p)
                  //p.word = Word(p).setKey(index)
                  p.lec.addWord(p.word)
                  p.word.value = 0
                  console.log("appended new page with key", p.word.key)
                }
              }

              p.addEventListener('click', () => p.self_activate())
            },

            // onCreate: p => p.html("loading..."),

            onPageActive: (p, index) => {
              p.onFetch(function () {
                console.log('fetched', p)
                // return onFetch(p)

                if (p.active) {
                  p.self_activate()
                }

                //console.log(p)
              })
            },

            //onPageInactive: p => {
            //p.css('background gray')
            ////if (p.word){ 
            ////p.lec.removeWord(p.word.key)
            ////p.word = p.word.destroy()
            ////}
            //},

            onPageDestroy: p => {
              if (p.word) {
                //console.log('destroy', p.word.key)
                p.lec.removeWord(p.word.key)
                p.word = p.word.destroy()
                //console.log(p.lec)
              }
            }
          }
        }
      }

    let lector = Lector(".pdf-page", settings)
  })
}
