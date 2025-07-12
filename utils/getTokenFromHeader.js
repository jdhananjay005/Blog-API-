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
