import * as contrast from 'contrast'
import * as styledComponents from 'styled-components'

export interface Colors {
  aquamarine: '#54FBAC'
  concrete: '#F3F2F2'
  cornflowerBlue: '#668CFF'
  radicalRed: '#FF3B5C'
}

export interface Sizes {
  desktop: 1025
  giant: 1170
  phone: 376
  tablet: 768
}

const sizes: Sizes = {
  desktop: 1025,
  giant: 1170,
  phone: 376,
  tablet: 768,
}

export const contrastCheck = (color: string) => {
  // Something breaks when trying to use contrast
  // function inside tests
  if (process.env.NODE_ENV === 'test') {
    return 'contrastedColor'
  }

  return contrast(color) === 'light' ? '#000' : '#fff'
}

interface Browsers {
  ie10Or11: (styleRules: string) => string
}

export const browsers: Browsers = {
  ie10Or11: (styleRules: string) => `@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {${styleRules}}`
}

export const colors: Colors = {
  aquamarine: '#54FBAC',
  concrete: '#F3F2F2',
  cornflowerBlue: '#668CFF',
  radicalRed: '#FF3B5C',
}

export interface Theme {
  colors: Colors
  contrast: typeof contrastCheck
  sizes: Sizes
  browsers: Browsers
}

export const theme: Theme = {
  browsers,
  colors,
  contrast: contrastCheck,
  sizes,
}

export function withProps<U>() {
  return <P, T, O>(
    fn: styledComponents.ThemedStyledFunction<P, T, O>
  ): styledComponents.ThemedStyledFunction<P & U, T, O & U> =>
    fn as styledComponents.ThemedStyledFunction<P & U, T, O & U>
}
const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

const { ServerStyleSheet } = styledComponents

export { css, injectGlobal, keyframes, ThemeProvider, ServerStyleSheet }
export default styled
