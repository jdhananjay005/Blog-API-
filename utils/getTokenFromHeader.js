<<<<<<< HEAD
const getTokenFromHeader = (req) => {
  // Get the token from the header
  const headerObj = req.headers
  const Token = headerObj['authorization'].split(' ')[1]

  if (Token !== undefined) {
    return Token
  } else {
    return false
  }
}

module.exports = getTokenFromHeader
=======
const getTokenFromHeader = (req) => {
  // Get the token from the header
  const headerObj = req.headers
  const Token = headerObj['authorization'].split(' ')[1]

  if (Token !== undefined) {
    return Token
  } else {
    return false
  }
}

module.exports = getTokenFromHeader
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
