import  { _thread } from "pragma-thread"

const thr = _thread().define({
        // return xE[0, 1] with 1 meaning the text is most likely NOT broken, and 0 being that there is only broken, or no text in the string

    isTextFucked(txt) {
      if (!txt) return 0

      let invalids = 0
      for (let c of txt) {
        if (c.charCodeAt(0) >= 30000) invalids += 1 
      }
      return invalids/txt.length
    },
}) 

export async function textFuckery(txt) {
  return await thr.isTextFucked(txt)
}
