const Compose = (...functions) => initialValue =>
  functions.reduceRight((acc, currentFunction) =>
    currentFunction(acc) , initialValue)

module.exports = Compose
