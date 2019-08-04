const stringAssertion = function(testedValue, element) {
  if(!testedValue.includes(element)) {
    throw new Error(`${element} isn't an element of ${testedValue}`)
  }
}

module.exports = stringAssertion
