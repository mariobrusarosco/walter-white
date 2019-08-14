const Curry = function() {
  const fn = arguments[0]
  const expectedArgs = fn.length
  let alreadyGivenArgs = []

  return function wrapperFunction() {
    alreadyGivenArgs = [...alreadyGivenArgs, ...arguments]

    if(args.length >= expectedArgs) {
      // Ignoring extra arguments that may be passed by the users on the last time they call the Curried function
      const finalArguments = alreadyGivenArgs.slice(0, expectedArgs)
      // Clean all the previous given arguments
      alreadyGivenArgs = []

      return fn(...finalArguments)
    }

    return wrapperFunction
  }
}

module.exports = Curry
