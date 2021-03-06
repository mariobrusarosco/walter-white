const Curry = require('./index')

describe("Curry Test", () => {

  const addSixNumbers = (n1,n2,n3,n4,n5,n6) => {
    return n1 + n2 + n3 + n4 + n5 + n6
  }

  describe("Must return 'functions' until all arguments had been passed", () => {
    const curriedFunction = Curry(addSixNumbers)

    const oneArgumentCurried = curriedFunction(1)
    const threeArgumentsCurried = oneArgumentCurried(2,3)
    const allArgumentsCurried = threeArgumentsCurried(4,5,6)

    const allArgumentsInATime = curriedFunction(1,2,3,4,5,6,7)

    it('Must Call the Curry helper and return a function', () => {
      expect(typeof Curry(addSixNumbers)).toBe('function')
    })

    it("It must pass the first argument and return a function", () => {
      expect(typeof oneArgumentCurried).toBe('function')
    })

    it("It must pass the second and third arguments and also return a function", () => {
      expect(typeof threeArgumentsCurried).toBe('function')
    })

    it("It must return the integer: 21", () => {
      expect(allArgumentsCurried).toEqual(21)
    })

    it("It must return the integer: 21", () => {
      expect(allArgumentsInATime).toEqual(21)
    })
  })
})
