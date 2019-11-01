export function sleep (ms = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('We are sleeping')
    }, ms)
  })
}
