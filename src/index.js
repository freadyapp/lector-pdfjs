import { helpers } from "lectorjs"
export { Lector, helpers, Word } from "lectorjs"
import { _e, _p, Pragma, util } from 'pragmajs'
export { PDFViewer } from "./pdfLoader/index"
// import Mousetrap from 'mousetrap'

export const wfy = helpers.wfy

import css from "./styles/styles.json"
export function injectStyles(functional=true, themeName='default'){
  if (functional) util.addStyles(css.basic, 'lectorjs-pdf-functional')
  let theme = themeName && css[`${themeName}_theme`]
  if (theme) util.addStyles(theme, `lectorjs-pdf-${themeName}-theme`)
}

export * as pragma from "pragmajs"
export * as lector from "lectorjs"
export * as utilities from "./utilities/index"
