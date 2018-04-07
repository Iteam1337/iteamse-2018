import 'raf/polyfill'

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth
  global.window.innerHeight = height || global.window.innerHeight

  global.window.dispatchEvent(new Event('resize'))
}
