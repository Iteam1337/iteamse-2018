import * as contrast from 'contrast'
import * as styledComponents from 'styled-components'

export interface Colors {
  alabaster: '#FAFAFA'
  aquamarine: '#54FBAC'
  cornflowerBlue: '#668CFF'
  emperor: '#555555'
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
  ie10Or11: (styleRules: string) =>
    `@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {${styleRules}}`,
}

export const colors: Colors = {
  alabaster: '#FAFAFA',
  aquamarine: '#54FBAC',
  cornflowerBlue: '#668CFF',
  emperor: '#555555',
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

declare module 'styled-components' {
  // tslint:disable-next-line
  interface DefaultTheme extends Theme {}
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, Theme>

export { css, createGlobalStyle, keyframes, ServerStyleSheet, ThemeProvider, ThemedStyledProps }
export default styled
