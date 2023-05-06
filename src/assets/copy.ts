export default function (prompt: string, cb?: Function): void {
  const text = 'Write About ' + prompt
  navigator.clipboard.writeText(text).then(() => {
    console.log(`copied "${text}"`)
    if (typeof cb === 'function') {
      cb(text)
    }
  })
}
