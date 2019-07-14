const Curry = function() {
  const fn = arguments[0]
  const expectedArgs = fn.length
  let args = []

  return function wrapperFunction() {
    args = [...args, ...arguments]

    if(args.length === expectedArgs) {
      return fn(...args)
    }

    return wrapperFunction
  }
}

module.exports = Curry
