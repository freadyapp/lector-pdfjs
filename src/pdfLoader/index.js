import * as pdfjs from "../pdfjs/build/pdf"
pdfjs.GlobalWorkerOptions.workerSrc = globalThis.pdfWorkerSrc || '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js'

export { PDF } from "./PDF"
export { PDFViewer } from "./pdfViewer"