<<<<<<< HEAD
const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_Key, (err, decoded) => {
    if (err) {
      return false
    } else {
      return decoded
    }
  })
}

module.exports = verifyToken
=======
const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_Key, (err, decoded) => {
    if (err) {
      return false
    } else {
      return decoded
    }
  })
}

module.exports = verifyToken
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
