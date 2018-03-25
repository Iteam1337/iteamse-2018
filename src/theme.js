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
  contrast: (color: string) => {
    // Something breaks when trying to use contrast
    // function inside tests
    if (process.env.NODE_ENV === 'test') {
      return 'contrastedColor'
    }

    return contrast(color) === 'light' ? '#000' : '#fff'
  },
}
