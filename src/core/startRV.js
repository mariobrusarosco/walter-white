const glob = require("glob")
const childProcess = require('child_process');


// const chokidar = require('chokidar');

// // One-liner for current directory
// chokidar.watch('.').on('all', (event, path) => {
//   console.log(event, path);
// });


global.globalString = "This can be accessed anywhere!";
const startRV = (testFilesPath) => {
  console.log('Starting the RV at ', testFilesPath)
  const firstPath = testFilesPath[0]

  glob(firstPath, {debug: false}, function (err, files) {
    if(err) {
      return console.log('error', er)
    }
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.

    console.log({files})

    const a  = childProcess.fork(files[0], null, { name: 1})
    a.send({ newBatch: () => console.log(111)})
  })

}

module.exports = startRV
