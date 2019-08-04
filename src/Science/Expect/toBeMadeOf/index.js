// Helpers
const stringAssertion = require('../helpers/stringAssertion')

const toBeMadeOf = function(testedValue, element) {
  const typeOfArgment = typeof element
  // switch(typeOfArgment) {
  // 	case 'string':
  // 		stringAssertion(testedValue, element)
  // 		break
  // 	case 'object':
  // 		regexAssertion(testedValue, element)
  // 		break
  // }

    if(typeOfArgment === 'string') {
      stringAssertion(testedValue, element)
    }
    else if(typeOfArgment === 'object') {
      regexAssertion(testedValue, element)
    }

    // else {

    // }
}

module.exports = toBeMadeOf
