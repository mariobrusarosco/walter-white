const regexAssertion = function(testedValue, regex) {
  const test = regex.test(testedValue)

  if(!test) {
    throw new Error(`${regex} isn't an element of ${testedValue}`)
  }
}

module.exports = regexAssertion
