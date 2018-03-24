// @flow

import * as contrast from 'contrast'

export const colors = {
  aquamarine: '#54FBAC',
  concrete: '#F3F2F2',
  cornflowerBlue: '#668CFF',
  radicalRed: '#FF3B5C',
}

export const theme = {
  colors,
  contrast: (color: string) => (contrast(color) === 'light' ? '#000' : '#fff'),
}
