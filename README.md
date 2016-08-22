# node-maybe-callback

## Error free callback handler for NodeJs

### What is this?

Async functions in node, call the callback with an error and result.

1. Handle all your errors in a single error handler (e.g. error logger)
2. Make sure all errors are handled
3. Avoid if else statements in the callback

#### Example without node-maybe-callback

```javascript
fs.exists('test.txt', err => {
  if (!err) {
    fs.readFile('test.txt', (err, data) => {
      if (!err) {
        // do something
      }
    }) 
  }
})
```

#### Example with node-maybe-callback

```javascript
fs.exists('test.txt', mayBe(() => {
  fs.readFile('test.txt', mayBe(data => {
    // do something
  })) 
}))

## Install

```
$ npm install node-maybe-callback
```

## usage

```javascript
const errorHandler = e => console.log(e)
const mayBe = require('node-maybe-callback')(errorHandler)
fs.exists('test.txt', mayBe(() => {
  fs.readFile('test.txt', mayBe(data => {
    // do something
  })) 
}))
``````