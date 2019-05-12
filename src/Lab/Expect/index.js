const expect = function(testedValue) {
	return {
		asPureAs: function(expectedValue) {
			if(testedValue !== expectedValue) {
				throw new Error(`${testedValue} isn't as pure as ${expectedValue}`)
			}
		},
		// TODO
		//toContains:
	}
}

module.exports = expect
