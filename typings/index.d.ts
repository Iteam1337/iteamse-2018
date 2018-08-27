declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  const content: any
  export default content
}

declare module 'apollo-mocknetworkinterface'
declare module 'contrast'
declare module 'dom-testing-library'
declare module 'node-fetch'
declare module 'react-fastclick'
declare module 'react-html-parser'
declare module 'react-markdown'
declare module 'react-mock-router'
declare module 'react-reveal'
declare module 'react-reveal/Fade'
declare module 'react-safe'

type ConfigObject = {
  page_location?: string
  page_path?: string
  page_title?: string
}
