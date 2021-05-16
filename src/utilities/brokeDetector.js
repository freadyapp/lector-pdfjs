// return xE[0, 1] with 1 meaning the text is most likely NOT broken, and 0 being that there is only broken, or no text in the string

export function isTextBroken(txt) {
  if (!txt) return 0

  let invalids = 0
  for (let c of txt) {
    if (c.charCodeAt(0) >= 30000) invalids += 1 
  }
  return invalids/txt.length
  //console.log('log invalid chars ratio', invalids/txt.length)
  //return !txt || /[^\u0000-\u00ff]/.test(txt) 
}
