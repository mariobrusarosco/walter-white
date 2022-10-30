// Helpers
const stringAssertion = require('./helpers/stringAssertion')
const regexAssertion = require('./helpers/regexAssertion')

const expect = function(testedValue) {
	return {
		toBeAsPureAs: function(expectedValue) {
			if(testedValue !== expectedValue) {
				throw new Error(`${testedValue} isn't as pure as ${expectedValue}`)
			}

			return true
		},
		toBeMadeOf: function(element) {
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
				return stringAssertion(testedValue, element)
			}
			else if(typeOfArgment === 'object') {
				return 	regexAssertion(testedValue, element)
			}

			throw new Error('Invalid Argument')
		}
	}
}

module.exports = expect
