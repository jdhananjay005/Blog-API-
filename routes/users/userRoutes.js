const express = require('express')
const storage = require('../../config/cloudinary')
const multer = require('multer')
const {
  userRegisterCtrl,
  userLoginCntrl,
  userCtrl,
  userProfileCntrl,
  deleteUserCtrl,
  updateUserCtrl,
  profilePhotoUploadCtrl,
  whoViewedMyProfileCtrl,
  followingCtrl,
  unFollowCtrl,
  blockedUserCtrl,
  unBlockedUserCtrl
} = require('../../controller/users/userCtrl') // it means go two directory back user -> Routes (2 Directory back)

const isLogin = require('../../middlewares/isLogin')
const userRouter = express.Router()

// Creating the Instance of the multer
const upload = multer({ storage })

//POST/api/v1/users/Register
userRouter.post('/register', userRegisterCtrl)

//POST/api/v1/users/login
userRouter.post('/login', userLoginCntrl)

//GET/api/v1/users/:id
userRouter.get('/profile', isLogin, userProfileCntrl)

//GET/api/v1/users
userRouter.get('/', userCtrl)

//DELETE/api/v1/users/:id
userRouter.delete('/:id', deleteUserCtrl)

//PUT/api/v1/users/:id
userRouter.put('/:id', updateUserCtrl)

//GET/api/v1/users/profile-viewers/:id
userRouter.get('/profile-viewers/:id', isLogin,whoViewedMyProfileCtrl)

//GET/api/v1/users/following/:id
userRouter.get('/following/:id', isLogin,followingCtrl)

//GET/api/v1/users/unfollowing/:id
userRouter.get('/unfollowing/:id', isLogin,unFollowCtrl)

//Post/api/v1/users/block/:id
userRouter.get('/block/:id', isLogin,blockedUserCtrl)

//Post/api/v1/users/unblock/:id
userRouter.get('/unblock/:id', isLogin,unBlockedUserCtrl)

//POST/api/v1/users/:id
userRouter.post(
  '/profile-photo-upload',
  isLogin,
  upload.single('profile'),
  profilePhotoUploadCtrl
)

module.exports = userRouter
