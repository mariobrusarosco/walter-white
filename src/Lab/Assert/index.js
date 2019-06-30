let results;

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

module.exports = {
  assert,
  groupTest,
}
