let results;
let paused = false;
let queue = [];

const assert = (value, text) => {
  const li = document.createElement('li')

  li.className = value ? 'pass': 'fail'
  li.appendChild(document.createTextNode(text))

  results.appendChild(li)

  if(!value) {
    li.parentNode.parentNode.className = 'fail'
  }

  return li
}

const groupTest = function(name, fn) {
  results = document.querySelector('.results-lists')

  results = assert(true, name).appendChild(
    document.createElement('ul')
  )

  fn()
}

const asyncTest = (name, fn) => {
  queue.push(function() {
    results = document.querySelector('.results-lists')
    results = assert(true, name)
      .appendChild(document.createElement('ul'))

    fn()
  })

  runTest()
}

/* eslint-disable */
const pause = () => paused = true
/* eslint-enable */
const resume = () => {
  paused = false

  setTimeout(runTest, 1)
}

const runTest = function() {
  if(!paused && queue.length) {
    queue.shift()()

    if(!paused) {
      resume()
    }
  }
}

module.exports = {
  assert,
  groupTest,
  asyncTest,
  pause
}
