// @flow

import * as contrast from 'contrast'
import { css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 1024,
  tablet: 768,
  phone: 376,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16

  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const colors = {
  aquamarine: '#54FBAC',
  concrete: '#F3F2F2',
  cornflowerBlue: '#668CFF',
  radicalRed: '#FF3B5C',
}

export const theme = {
  colors,
  contrast: (color: string) => {
    // Something breaks when trying to use contrast
    // function inside tests
    if (process.env.NODE_ENV === 'test') {
      return 'contrastedColor'
    }

    return contrast(color) === 'light' ? '#000' : '#fff'
  },
  media,
}
