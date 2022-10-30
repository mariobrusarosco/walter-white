const cook = (testName, givenTest) => {
	try{
		// const testResult = givenTest()

		givenTest()
		// if(!testResult) throw Error(`You can't meet with Tuco...with no product`)

		console.log(`\n Yeah! Science! \u{2714} : ${testName} has passed.\n `)

	}
	catch(error) {
		console.error(`\n \u{274C}  : ${testName} has failed. \n\n  ${error}\n`)
	}
}

module.exports = cook
