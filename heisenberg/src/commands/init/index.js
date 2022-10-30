const yargs = require('yargs')

// console.log(yargs)

// // options is optional
// glob("**/*.js", options, function (er, files) {
//   // files is an array of filenames.
//   // If the `nonull` option is set, and nothing
//   // was found, then files is ["**/*.js"]
//   // er is an error object or null.
// })


const initCommand = yargs.command(
  'init',
  'This command start your Front End Build configuration',
  yargs => {
    (() => {
      console.log(yargs)
    })
  }

)

module.exports = initCommand
