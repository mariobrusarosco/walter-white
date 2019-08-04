const chalk = require('chalk')

const NewBatch = (batchDescription, fn) => {
  NewBatch.roundsOfCoook = 0

  console.log(`Batch: ${chalk.red(batchDescription)}`);

  fn()

  // if(!batchContent) {
  //   console.error(`\n \u{274C}  : You can't start a new batch with no methylamine.`)
  //   return
  // }
}


module.exports = NewBatch
