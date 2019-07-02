const gravatar = require('../gravatar')

describe('#gravatar', () => {
  it('should return a Gravatar link', () => {
    expect(gravatar('cookie@monster.com')).toEqual(
      'https://www.gravatar.com/avatar/d34479239e70df24688f16b94add383f?s=300'
    )
  })
})
