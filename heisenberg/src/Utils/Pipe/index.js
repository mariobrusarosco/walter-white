const Pipe = (...functions) => initialValue => {
    return functions.reduce((acc, fn) => fn(acc), initialValue)
  }

module.exports = Pipe
