// import { Lector } from '../src'
// import { Word } from "../src/lector"


pragmaSpace.integrateMousetrap(Mousetrap)
let _e = lectorPdf.pragma._e

lectorPdf.lector.globalify()

console.log(Mousetrap)

let viewer = new lectorPdf.PDFViewer("#the-canvas")
Mousetrap.bind("o", () => viewer.scaleUp())
Mousetrap.bind("shift+o", () => viewer.scaleDown())

var url = "/docs/pdfs/dicks.pdf"

viewer.loadFromUrl(url)
//viewer.render()
viewer.on('load', () => {
  console.log('loaded')
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
          onPageAdd: (p, index) => {
            //p.css("background lightgray")
            //console.log(p)
            p.setData({ index: index })
          },

          onFetch: (p, index) => {
            console.log('p has been fetched', index)
  //   viewer.createPage(pageIndex).then(page => {
  //     resolve(page.html())
  //   })   
            viewer.createPage(index).then(pdfPage => {
              p.append(pdfPage)
              p.find(".page-loader").css('opacity 0')
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

//lector.globalify()

//function fetchContent(index){
  //// return content[index]

  //return new Promise(resolve => {
    //setTimeout(_ => {
      //let txt = ""

      //let abc = "abcdefghijklmnopqrstuvwrxyz "
      //let len = abc.length
      //let words = 100

      //while (words > 0){
        //txt += abc.charAt(Math.floor(Math.random()*len))
        //if (Math.floor(Math.random()*6) == 3){
          //txt += " "
          //words --
        //}
      //}
      ////resolve(`<div class="t m0 x0 h3 y27 ff1 fs0 fc0 sc0 ls0 ws0"><w>Fabian</w> <w>Dälken.</w> <w>(2014).</w> <span class="ff2 ls1"><w>Are</w> <w>Porter’s</w> <w>Five</w> <w>Competitive</w> <w>Forces</w> <w>still</w> </span></div>`)
      //resolve(`<h1> Page ${index} </h1> <p>This is a test which copefully will not confirm my own suspicions. ${txt}</p>`)
    //}, Math.random()*1900)
  //})
//}

////function onFetch(p, index){
  ////console.log("P >>>>>>>>", p)
  ////return new Promise(resolve => {
    ////setTimeout(_ => {
      ////p.css('background lime')
      ////resolve()
    ////}, Math.random()*1000)
  ////})
////}

//let lectorSettings = {
   //wfy: true,
   //loop: false,
   //autostart: false,

   //defaultStyles: true,
   //fullStyles: true,

   //scaler: true,
   //pragmatizeOnCreate: true,
   //experimental: true,
  
   //settings: true,
   //stream: fetchContent,
    //// function with index as param that
    //// returns the content for the page
    //// can return a promise

   //paginate: {
     //from: 'stream',
     //as: 'infiniteScroll',
     //config: {
      //onPageAdd: (p, index) => {
        ////p.css("background lightgray")
        ////console.log(p)
        //p.setData({ index: index })

      //},

      //onCreate: (p, index) => {
        //p.self_activate = function(){
          //console.log('self activating', p)
           //if (!p.word) {
             //// generate lector for the page
             //lector.helpers.wfy(p)
             //p.word = Word(p).setKey(index)
             //p.lec.addWord(p.word)
             //// p.word.value = 0
             //// console.log("appended new page with key", p.word.key)
           //}

           //p.css('background whitesmoke')
        //}

        //p.addEventListener('click', () => p.self_activate())
      //},

      //// onCreate: p => p.html("loading..."),

      //onPageActive: (p, index) => {
        //p.onFetch(function(){
          //console.log('fetched', p)
          //// return onFetch(p)

          //if (p.active) {
            //p.self_activate() 
          //}

          ////console.log(p)
        //})
      //},

    ////onPageInactive: p => {
      ////p.css('background gray')
      //////if (p.word){ 
        //////p.lec.removeWord(p.word.key)
        //////p.word = p.word.destroy()
      //////}
    ////},

    //onPageDestroy: p => {
      //if (p.word){
        ////console.log('destroy', p.word.key)
        //p.lec.removeWord(p.word.key)
        //p.word = p.word.destroy()
        ////console.log(p.lec)
      //}
    //}
  //}
 //}
//}

////pragmaSpace.dev = true
//pragmaSpace.integrateMousetrap(Mousetrap)

//let lec = Lector(".article", lectorSettings)

////console.log(lec.mark.settings)
////setTimeout(_ => {
  ////lec.paginator.goTo(parseInt(prompt()))
////}, 5000)
////
////lec.paginator.value = 55
////setTimeout(_ => {
  ////console.log(lec.paginator.pages.get(55))
  ////lecUtil.scrollTo(lec.paginator.pages.get(55))
////}, 500)

