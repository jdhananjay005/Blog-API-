<<<<<<< HEAD
const bcrypt = require('bcryptjs')
const User = require('../../model/User/User')
const generateToken = require('../../utils/generateToken')
const getTokenFromHeader = require('../../utils/getTokenFromHeader')
const appError = require('../../utils/appError')

//Register
const userRegisterCtrl = async (req, res, next) => {
  const { firstname, lastname, profilephoto, email, password } = req.body
  try {
    // check email existed
    const userFound = await User.findOne({ email })
    if (userFound) {
      return next(appError('User Already Exist', 500))
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    //create the user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
    })
    res.json({
      status: 'Success',
      data: user,
    })
  } catch (error) {
    next(appError(error.message))
  }
}

//Login
const userLoginCntrl = async (req, res) => {
  const { email, password } = req.body
  try {
    // check if the email exist
    const userFound = await User.findOne({ email })
    if (!userFound) {
      res.json({
        msg: 'Invalid Login credentials ',
      })
    }

    // Check the password matches in the database.
    const isPasswordMatched = await bcrypt.compare(password, userFound.password)
    if (!isPasswordMatched) {
      res.json({
        msg: 'Invalid Login credentials ',
      })
    }
    res.json({
      status: 'Success',
      data: {
        firstname: userFound.firstname,
        lastname: userFound.lastname,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
        token: generateToken(userFound._id),
      },
    })
  } catch (error) {
    res.json(error.message)
  }
}

// Who viewed my profile
const whoViewedMyProfileCtrl = async (req, res, next) => {
  try {
    // 1. Find the original (Main) User that we want to view his/her profile
    const user = await User.findById(req.params.id)

    // 2. Find the user who viewed the Original / main user
    const userWhoViewed = await User.findById(req.userAuth)
    // 3. Check original user and viewed user are found

    if (user && userWhoViewed) {
      // 4. Check if the viewed user is not the same as the original user
      //Also, check that viewed user has already seen the Original user post in the array
      const isUserAlreadyViewed = user.viewers.find(viewers => viewers.toString() === userWhoViewed._id.toString())
      
      if(isUserAlreadyViewed){
        return next(appError("You already viewed this profile"));
      }
      else{
        // 5. Push the userWhoViewed to the user's viewers Array
       user.viewers.push(userWhoViewed._id);
      // 6. Save the user
      await user.save()
      res.json({
        status: "Success",
        data: "You have successfully viewed this profile.",
      });
    }
    }
    
  } catch (error) {
    res.json(error.message)
  }
}

// All users
const userCtrl = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'All users route',
    })
  } catch (error) {
    res.json(error.message)
  }
}

//Profile
const userProfileCntrl = async (req, res) => {
  try {
    // Get the token from the header
    const user = await User.findById(req.userAuth)
    res.json({
      status: 'Success',
      data: user,
    })
  } catch (error) {
    res.json(error.message)
  }
}

// Delete
const deleteUserCtrl = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'delete user route',
    })
  } catch (error) {
    res.json(error.message)
  }
}

//Update user
const updateUserCtrl = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'update user route',
    })
  } catch (error) {
    res.json(error.message)
  }
}

//Profile Photo Upload
const profilePhotoUploadCtrl = async (req, res, next) => {
  try {
    //1. Find the user to be updated.
    const userUpdate = await User.findById(req.userAuth)

    //2. check if user is found.
    if (!userUpdate) {
      return appError('User Not Found.', 403)
    }
    //3. check if user is blocked.
    if (userUpdate.isBlocked) {
      return appError('Action is not allowed, your account  is blocked', 403)
    }
    //4. check if user is updating their photo.
    if (req.file) {
      //5. Update profile photo.
      await User.findByIdAndUpdate(
        req.userAuth,
        {
          $set: {
            profilephoto: req.file.path,
          },
        },
        {
          new: true,
        }
      )
      res.json({
        status: 'Success',
        data: 'You have successfully updated your profile photo',
      })
    }
  } catch (error) {
    next(appError(error.message, 500))
  }
}

module.exports = {
  userRegisterCtrl,
  userLoginCntrl,
  userCtrl,
  userProfileCntrl,
  deleteUserCtrl,
  updateUserCtrl,
  profilePhotoUploadCtrl,
  whoViewedMyProfileCtrl,
}
=======
const bcrypt = require('bcryptjs')
const User = require('../../model/User/User')
const generateToken = require('../../utils/generateToken')
const getTokenFromHeader = require('../../utils/getTokenFromHeader')
const appError = require('../../utils/appError')

//Register
const userRegisterCtrl = async (req, res, next) => {
  const { firstname, lastname, profilephoto, email, password } = req.body
  try {
    // check email existed
    const userFound = await User.findOne({ email })
    if (userFound) {
      return next(appError('User Already Exist', 500))
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    //create the user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
    })
    res.json({
      status: 'Success',
      data: user,
    })
  } catch (error) {
    next(appError(error.message))
  }
}

//Login
const userLoginCntrl = async (req, res) => {
  const { email, password } = req.body
  try {
    // check if the email exist
    const userFound = await User.findOne({ email })
    if (!userFound) {
      res.json({
        msg: 'Invalid Login credentials ',
      })
    }

    // Check the password matches in the database.
    const isPasswordMatched = await bcrypt.compare(password, userFound.password)
    if (!isPasswordMatched) {
      res.json({
        msg: 'Invalid Login credentials ',
      })
    }
    res.json({
      status: 'Success',
      data: {
        firstname: userFound.firstname,
        lastname: userFound.lastname,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
        token: generateToken(userFound._id),
      },
    })
  } catch (error) {
    res.json(error.message)
  }
}

// Who viewed my profile
const whoViewedMyProfileCtrl = async (req, res) => {
  try {
    // 1. Find the original User that we want to view his/her profile
    // 2. Find the user who viewed the Original user
    // 3. Check original user and viewed user are found
    // 4. Also, check that viewed user has already seen the Original user post in the array
    // 5. Push the userWhoViewed to the user's viewers Array
    // 6. Save the user

    res.json({
      status: 'Success',
      data: 'Who viewed my profile',
    })
  } catch (error) {
    res.json(error.message)
  }
}

// All users
const userCtrl = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'All users route',
    })
  } catch (error) {
    res.json(error.message)
  }
}

//Profile
const userProfileCntrl = async (req, res) => {
  try {
    // Get the token from the header
    const user = await User.findById(req.userAuth)
    res.json({
      status: 'Success',
      data: user,
    })
  } catch (error) {
    res.json(error.message)
  }
}

// Delete
const deleteUserCtrl = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'delete user route',
    })
  } catch (error) {
    res.json(error.message)
  }
}

//Update user
const updateUserCtrl = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'update user route',
    })
  } catch (error) {
    res.json(error.message)
  }
}

//Profile Photo Upload
const profilePhotoUploadCtrl = async (req, res, next) => {
  try {
    //1. Find the user to be updated.
    const userUpdate = await User.findById(req.userAuth)

    //2. check if user is found.
    if (!userUpdate) {
      return appError('User Not Found.', 403)
    }
    //3. check if user is blocked.
    if (userUpdate.isBlocked) {
      return appError('Action is not allowed, your account  is blocked', 403)
    }
    //4. check if user is updating their photo.
    if (req.file) {
      //5. Update profile photo.
      await User.findByIdAndUpdate(
        req.userAuth,
        {
          $set: {
            profilephoto: req.file.path,
          },
        },
        {
          new: true,
        }
      )
      res.json({
        status: 'Success',
        data: 'You have successfully updated your profile photo',
      })
    }
  } catch (error) {
    next(appError(error.message, 500))
  }
}

module.exports = {
  userRegisterCtrl,
  userLoginCntrl,
  userCtrl,
  userProfileCntrl,
  deleteUserCtrl,
  updateUserCtrl,
  profilePhotoUploadCtrl,
  whoViewedMyProfileCtrl,
}
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
