import { colors } from '../theme'

export const handleColors = bgColor => {
  switch (bgColor) {
    case 'blue':
      return colors.cornflowerBlue
    case 'red':
      return colors.radicalRed
    case 'green':
      return colors.aquamarine
    default:
      return bgColor
  }
}
