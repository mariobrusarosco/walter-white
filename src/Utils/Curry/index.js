const Curry = function() {
  const fn = arguments[0]
  const expectedArgs = fn.length
  let args = []

  return function wrapperFunction() {
    args = [...args, ...arguments]

    if(args.length >= expectedArgs) {
      const finalArguments = args.slice(0, expectedArgs)
      args = []

      return fn(...finalArguments)
    }

    return wrapperFunction
  }
}

module.exports = Curry
