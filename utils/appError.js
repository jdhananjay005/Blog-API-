<<<<<<< HEAD
//app Error
const appError = (message, statusCode) => {
  let error = new Error(message)
  error.statusCode = statusCode ? statusCode : 500
  error.stack = error.stack
  return error
}

module.exports = appError
=======
//app Error
const appError = (message, statusCode) => {
  let error = new Error(message)
  error.statusCode = statusCode ? statusCode : 500
  error.stack = error.stack
  return error
}

module.exports = appError
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
