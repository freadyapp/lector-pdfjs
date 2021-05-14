let _e = lectorPdf.pragma._e
let _p = lectorPdf.pragma._p

lectorPdf.lector.globalify()
pragmaSpace.dev = true
lectorPdf.injectStyles()

let loader = lectorPdf.utilities.loader(1).appendTo(_e("[data-lector-target='loading']"))
globalThis.pragmaSpace.integrateMousetrap(Mousetrap)

let pdfs = {
  "algorythms": "https://freadypublic.s3.eu-central-1.amazonaws.com/Data+Structures+and+Algorithms+in+Java%2C+6th+Edition%2C+2014.pdf",
  "energy star": "https://freadypublic.s3.eu-central-1.amazonaws.com/ENERGY+STAR.pdf",
  "reasoning and logic": "/docs/pdfs/dicks.pdf",
  "fready": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/cover+pdf.pdf",
  "schema": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/dbass2pages.pdf",
  "accounting": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/Financial+Accounting.pdf",
  "economics": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/Modern+Principles+of+Economics+copy.pdf",
  "psopy psopy": "https://freadypublic.s3.eu-central-1.amazonaws.com/pdfs/Organizational+Behaviour+17th+Edition.pdf",
  "test": "https://frengine.s3.eu-central-1.amazonaws.com/5747008a-c800-41c3-aaf5-1823abf2542f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIU7EN4763JEXYRUA%2F20210320%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20210320T230547Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=016f1786fa55c558f146d8c3ae04491d28547b580d4d3e372c7d8f9eb474bfe8"
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
  console.log('[pdf]', pdfName)
  initateFromPdfUrl(pdfs[pdfName])
})

params.on('paramsChange', function(params){
  this.element.findAll('.option').forEach(option => option.removeClass('selected'))
  this.element.find(`[data-option='${params.pdfName}']`).find('.option').addClass('selected')
  lectorController.triggerEvent("create", params.pdfName)
})

let pdfNameParam = params.get('pdfName')
pdfNameParam = pdfNameParam || "algorythms"
params.set("pdfName", pdfNameParam)


let pagePragmaMap = new Map // page
const pragmaPageOf = i => pagePragmaMap.get(i) 
const createPragmaPage = i => pagePragmaMap.set(i, _p(`page-${i}`))
const destroyPragmaPage = i => pagePragmaMap.delete(i)

function initateFromPdfUrl(url){
    
  let viewer = new lectorPdf.PDFViewer("#the-canvas")
  // var url = "/docs/pdfs/dicks.pdf"
  // var url = "https://freadypublic.s3.eu-central-1.amazonaws.com/ENERGY+STAR.pdf"
  globalThis.pragmaSpace.onDocLoad(() =>{
    viewer.loadFromUrl(url)
  })

  function fetchContent(pageIndex){
    return new Promise(resolve => resolve(pageIndex))
  }

  viewer.on('load', async () => {

    let settings = {
        wfy: false,
        onboarding: false,
        scaler: true,

        fullStyles: true,
        defaultStyles: true,

        settings: true,
        experimental: true,
        debug: true,

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
            headspace: 5,
            timeout: 500,
            onCreate: (p, index) => {
              createPragmaPage(index)
              console.log('[created]', index)
              //p.css("background lightgray")
              //console.log(p)
              p.addClass('lector-page', 'loading')
              p.setData({ index: index })
            },

            onFetch: (p, index) => {
              viewer.createPage(index).then(pdfPage => {
                console.log('[page appended]', index)
                p.append(pdfPage)
                // loader.destroy()
                p.removeClass('loading')

                pragmaPageOf(index)
                    .triggerEvent('render')
                    .run(function() {
                      this.rendered = true
                    })
              })

              p.self_activate = function () {
                if (!p.word) {
                  console.log("[ no word ] activating.... ]")
                  p.querySelectorAll('.textLayer')
                    .forEach(textLayer => {
                      lectorPdf.wfy(textLayer)
                    })

                  p.word = lectorPdf.Word(p).setKey(index)

                  p.lec.addWord(p.word)
                  p.word.value = 0
                  console.log("[ make word]", p.word)
                }
              }

              p.addEventListener('click', () => p.self_activate())

            },

            onPageActive: (p, index) => {
              pragmaPageOf(index)
                .run(function() {
                  const _fetch = () => {
                    console.log('[after fetch]')
                    if (p.active) {
                      p.self_activate()
                    }
                  };

                  if (this.rendered) return _fetch()

                  this.onNext('render', _fetch)
                })
            },

            onPageDestroy: (p, index) => {
              destroyPragmaPage(index)
              if (p.word) {
                console.log("[destroy]", index)
                p.lec.removeWord(p.word.key)
                p.word = p.word.destroy()
              }
            }
          }
        }
      }

    let lector = await Lector(".pdf-page", settings)
    // add code that remove the loader when the last page is reached
    //lector.settings.on('load', value => {
      //console.log('haha', value)
    //})

    //lector.settings.on('update', function() {
      //console.log(this.toObj())
    //})
  })
}
