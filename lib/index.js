
module.exports = function (errorHandler) {
  return function (callback) {
    return function (error, data) {
      if (error) {
        errorHandler(error)
      } else {
        callback(data)
      }
    }
  }
}
