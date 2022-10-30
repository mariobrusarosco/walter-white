#!/usr/bin/env node
// require = require("esm")(module/*, options*/)

const yargs = require('yargs')
const startRV = require('../src/core/startRV')

const run = () => {
  const testFilesPath = yargs.argv._

  if (!testFilesPath.length) {
    return console.log("You need to pass the path for your file(s). e.g. 'walter-whtie src/**/*.test.js'.")
  }

  startRV(testFilesPath)
}

module.exports = run()
// module.exports = yargs.argv
