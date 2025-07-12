<<<<<<< HEAD
const globalErrorHandler = (err, req, res, next) => {
  //status
  //message
  //stack trace
  const stack = err.stack
  const message = err.message
  const status = err.status ? err.status : 'failed'
  const statusCode = err?.statusCode ? err.statusCode : 500

  // send the response
  res.status(statusCode).json({
    status,
    message,
    stack,
  })
}
module.exports = globalErrorHandler
=======
const globalErrorHandler = (err, req, res, next) => {
  //status
  //message
  //stack trace
  const stack = err.stack
  const message = err.message
  const status = err.status ? err.status : 'failed'
  const statusCode = err?.statusCode ? err.statusCode : 500

  // send the response
  res.status(statusCode).json({
    status,
    message,
    stack,
  })
}
module.exports = globalErrorHandler
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
