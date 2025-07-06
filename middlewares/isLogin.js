const appError = require('../utils/appError')
const getTokenFromHeader = require('../utils/getTokenFromHeader')
const verifyToken = require('../utils/verifyToken')

const isLogin = (req, res, next) => {
  // get the token from the header
  const token = getTokenFromHeader(req)

  // Verify the token
  const decodedUser = verifyToken(token)

  //  save the user into request Object
  req.userAuth = decodedUser.id

  if (!decodedUser) {
    return next(appError('Invalid/ Expired token, Please login again', 500))
  } else {
    next()
  }
}

module.exports = isLogin
