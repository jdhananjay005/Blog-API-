<<<<<<< HEAD
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

//POST/api/v1/users/:id
userRouter.post(
  '/profile-photo-upload',
  isLogin,
  upload.single('profile'),
  profilePhotoUploadCtrl
)

module.exports = userRouter
=======
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
userRouter.get('/profile-viewers/:id', whoViewedMyProfileCtrl)

//POST/api/v1/users/:id
userRouter.post(
  '/profile-photo-upload',
  isLogin,
  upload.single('profile'),
  profilePhotoUploadCtrl
)

module.exports = userRouter
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
