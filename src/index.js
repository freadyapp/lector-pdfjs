import * as pdf from "./pdfjs/build/pdf"
import TextLayerBuilder from "./pdfjs/build/textLayer"

export function yoing(){
    console.log('yoing')
    console.log(pdf)
}
yoing()

var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.

// The workerSrc property shall be specified.
pdf.GlobalWorkerOptions.workerSrc = '/src/pdfjs/build/pdf.worker.js'

pdf.getDocument(url).promise
  .then(function(pdf) {

    // Get div#container and cache it for later use
    var container = document.getElementById("the-canvas");

    // Loop from 1 to total_number_of_pages in PDF document
    for (var i = 1; i <= pdf.numPages; i++) {

        // Get desired page
        pdf.getPage(i).then(function(page) {

          var scale = 1.5;
          var viewport = page.getViewport({scale :scale});
          var div = document.createElement("div");

          // Set id attribute with page-#{pdf_page_number} format
          div.setAttribute("id", "page-" + (page.pageIndex + 1));

          // This will keep positions of child elements as per our needs
          div.setAttribute("style", "position: relative");

          // Append div within div#container
          container.appendChild(div);

          // Create a new Canvas element
          var canvas = document.createElement("canvas");

          // Append Canvas within div#page-#{pdf_page_number}
          div.appendChild(canvas);

          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };

          // Render PDF page
            page.render(renderContext).promise.then(function () {
                // Get text-fragments
                return page.getTextContent();
            })
                .then(function (textContent) {
                    // Create div which will hold text-fragments
                    var textLayerDiv = document.createElement("div");

                    // Set it's class to textLayer which have required CSS styles
                    textLayerDiv.setAttribute("class", "textLayer");

                    // Append newly created div in `div#page-#{pdf_page_number}`
                    div.appendChild(textLayerDiv);

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
                });;
        });
    }
});





//var pdfDoc = null,
    //pageNum = 1,
    //pageRendering = false,
    //pageNumPending = null,
    //scale = 2,
    //canvas = document.getElementById('the-canvas'),
    //ctx = canvas.getContext('2d');

/**
 * Get page info from document, resize canvas accordingly, and render page.
 * @param num Page number.
 */
//function renderPage(num) {
  //pageRendering = true;
  //// Using promise to fetch the page
  //pdfDoc.getPage(num).then(function(page) {
    //var viewport = page.getViewport({scale: scale});
    //canvas.height = viewport.height;
    //canvas.width = viewport.width;

    //// Render PDF page into canvas context
    //var renderContext = {
      //canvasContext: ctx,
      //viewport: viewport
    //};

    //var renderTask = page.render(renderContext);

    //// Wait for rendering to finish
    //renderTask.promise.then(function() {
      //pageRendering = false;
      //if (pageNumPending !== null) {
        //// New page rendering is pending
        //renderPage(pageNumPending);
        //pageNumPending = null;
      //}
    //}).then(function () {
        //// Get text-fragments
        //return page.getTextContent();
    //})
        //.then(function (textContent) {
            //console.log(textContent)
            //// Create div which will hold text-fragments
            //var textLayerDiv = document.createElement("div");

            //// Set it's class to textLayer which have required CSS styles
            //textLayerDiv.setAttribute("class", "textLayer");

            //// Append newly created div in `div#page-#{pdf_page_number}`
            //div.appendChild(textLayerDiv);

            //// Create new instance of TextLayerBuilder class
            //var textLayer = new TextLayerBuilder({
                //textLayerDiv: textLayerDiv,
                //pageIndex: page.pageIndex,
                //viewport: viewport
            //});

            //// Set text-fragments
            //textLayer.setTextContent(textContent);

            //// Render text-fragments
            //textLayer.render();
        //});;
  //});

  //// Update page counters
  //document.getElementById('page_num').textContent = num;
//}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
//function queueRenderPage(num) {
  //if (pageRendering) {
    //pageNumPending = num;
  //} else {
    //renderPage(num);
  //}
//}

/**
 * Displays previous page.
 */
//function onPrevPage() {
  //if (pageNum <= 1) {
    //return;
  //}
  //pageNum--;
  //queueRenderPage(pageNum);
//}
//document.getElementById('prev').addEventListener('click', onPrevPage);

/**
 * Displays next page.
 */
//function onNextPage() {
  //if (pageNum >= pdfDoc.numPages) {
    //return;
  //}
  //pageNum++;
  //queueRenderPage(pageNum);
//}
//document.getElementById('next').addEventListener('click', onNextPage);

/**
 * Asynchronously downloads PDF.
 */
//pdf.getDocument(url).promise.then(function(pdfDoc_) {
  //pdfDoc = pdfDoc_;
  //document.getElementById('page_count').textContent = pdfDoc.numPages;

  //// Initial/first page rendering
  //renderPage(pageNum);
//});