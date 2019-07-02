import { handleColors } from '../handleColors'

describe('utils/handleColors', () => {
  it('should return VIG blue for string blue', () => {
    expect(handleColors('blue')).toEqual('#668CFF')
  })

  it('should return VIG green for string green', () => {
    expect(handleColors('green')).toEqual('#54FBAC')
  })

  it('should return VIG red for string red', () => {
    expect(handleColors('red')).toEqual('#FF3B5C')
  })

  it('should return input color if unknown', () => {
    expect(handleColors('#000')).toEqual('#000')
  })
})
