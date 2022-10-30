const Pipe = require('./index')

describe('Util: Pipe', () => {
  it('Must pass a string through two functions and return a tranformed value', () => {
    const capitalize = string => {
      if (!string || typeof string !== 'string') throw Error('Please pass a string')

      const firstLetter = string.substr(0,1).toUpperCase()
      const rest = string.substr(1).toLowerCase()

      return `${firstLetter}${rest}`
    }

    const normalizedFirstname = Pipe(
      x => x.replace(/[\s-]/g,''),
      capitalize
    )('  mAr IO --- ')

    expect(normalizedFirstname).toBe('Mario')
  })
})
