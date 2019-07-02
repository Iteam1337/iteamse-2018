import { apolloUri } from '../serverUtils'

describe('#apolloUri', () => {
  test('it handles absolute urls', () => {
    expect(apolloUri('http://localhost:3000/test')).toEqual(
      'http://localhost:3000/test'
    )
  })

  test('it handles relative urls', () => {
    expect(
      apolloUri('/test', {
        protocol: 'https',
        hostname: 'iteam.se',
      })
    ).toEqual('https://iteam.se/test')
  })
})
