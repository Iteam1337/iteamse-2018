import { filterByLocation } from '../filterByLocation'

describe('utils/filterByLocation', () => {
  it('should return item if location is empty string', () => {
    expect(filterByLocation('')('Alla')).toEqual('Alla')
  })

  it('should return true if location matches item location', () => {
    expect(filterByLocation('Stockholm')({ location: 'Stockholm' })).toBe(true)
  })

  it('should return false if location does not match item location', () => {
    expect(filterByLocation('Stockholm')({ location: 'Göteborg' })).toBe(false)
  })
})
