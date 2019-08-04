const { newBatch, cook, expect: scienceExpect } = require('../Science')

describe("Science Test", () => {
  let assertion = null

  it('Must check if something is pure!!!', () => {
    newBatch(`Crazy-8's Batch`, () => {
      cook('10 pounds of the little blue', () => {
        assertion = scienceExpect(10).toBeAsPureAs(10)
      })
    })

    expect(assertion).toBeTruthy()
  })

})
