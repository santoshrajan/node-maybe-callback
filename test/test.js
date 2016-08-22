
const assert = require('assert')
const fs = require('fs')
const mayBe = require('../lib/index')(errorHandler)

function errorHandler (e) {
  assert.strictEqual(true, e instanceof Error, 'Assertion Failed in Error Handeler')
}

fs.readFile('test/test.js', mayBe(data => {
  assert.strictEqual(true, data instanceof Buffer, 'Assertion Failed in Data Handeler')
}))

fs.readFile('giveanerror', mayBe(data => {
  // This is never called
  assert.strictEqual(true, data instanceof Buffer, 'Assertion Failed in Data Handeler')
}))
