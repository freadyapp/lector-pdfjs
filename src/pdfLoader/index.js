import * as pdfjs from "../pdfjs/build/pdf"
pdfjs.GlobalWorkerOptions.workerSrc = '/src/pdfjs/build/pdf.worker.js'

export { PDF } from "./PDF"
export { PDFViewer } from "./pdfViewer"