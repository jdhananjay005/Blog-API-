<<<<<<< HEAD
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_Key, { expiresIn: '7d' })
}

=======
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_Key, { expiresIn: '7d' })
}

>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
module.exports = generateToken