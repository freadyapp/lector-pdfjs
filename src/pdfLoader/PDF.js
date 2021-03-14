import * as pdfjs from "../pdfjs/build/pdf"

export class PDF {
    constructor(){
    }
    
    static fromUrl(url){
        return pdfjs.getDocument(url).promise
    }
}