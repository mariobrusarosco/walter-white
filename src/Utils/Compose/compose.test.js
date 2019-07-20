const Compose = require('../Compose')

describe('Util: Compose', () => {
  it(`Must return capitalized Heisenberg's full name`, () => {
    const walterWhite = 'Walter White'
    const addMiddleName = str => str && str.replace(' ',' Hartwell ')
    const addDrugLordName = str => str && str.includes('Hartwell') ? str.replace('Hartwell', "'Heisenberg'"): str

    const toHeisenberg = Compose(
      addDrugLordName,
      addMiddleName
    )(walterWhite)

    expect(toHeisenberg).toBe(`Walter 'Heisenberg' White`)
  })
})
