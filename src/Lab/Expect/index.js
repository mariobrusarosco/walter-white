const expect = function(testedValue) {
	return {
		toBePureAs: function(expectedValue) {
			if(testedValue !== expectedValue) {
				throw new Error(`${testedValue} isn't as pure as ${expectedValue}`)
			}
		},
		// TODO
		//toContains:
	}
}

module.exports = expect
