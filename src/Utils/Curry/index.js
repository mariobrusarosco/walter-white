const Curry = function() {
  const fn = arguments[0]
  const expectedArgs = fn.length
  let args = []

  const wrapperFunction = function() {
    args = [...args, ...arguments]

    if(args.length === expectedArgs) {
      return fn(...args)
    }

    return wrapperFunction
  }

  return wrapperFunction
}


module.exports = Curry
