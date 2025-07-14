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

// following
const followingCtrl = async (req, res,next) => {
  try {
    // 1. Find the user(A) that (B) want to follow.
    const userToFollow = await User.findById(req.params.id)

    // 2. Find the Id of the user(B) who is following and authenticated. 
    const userWhoFollowed = await User.findById(req.userAuth)

    // 3. Check the user and userWhoFollwed are found
    if(userToFollow && userWhoFollowed ){
      
      //4. Check if userwhoFollowed is already in the user's followers array.
      const isUserAlreadyFollowed = userToFollow.followers.find(follower => follower.toString() === userWhoFollowed._id.toString())

      if(isUserAlreadyFollowed){
        return next(appError("You already followed this user. "))
      }
      else{
        // 5. push userwhoFollowed into the user's following array.
        userToFollow.followers.push(userWhoFollowed._id)

        //6. push userToFollow to the userWhoFollowed's following array.
        userWhoFollowed.followings.push(userToFollow._id)

        //7. save both the 
        await userToFollow.save()
        await userWhoFollowed.save()

        //8 send the response
        res.json({
          status: 'Success',
          data: 'You have successfully followed this User.',
        })
      }
    }
    
  } catch (error) {
    res.json(error.message)
  }
}

//unfollowing 
const unFollowCtrl = async (req, res, next) => {
  try {
    //1. Find the user to unfolloW
    const userToBeUnfollowed = await User.findById(req.params.id);
    //2. Find the user who is unfollowing
    const userWhoUnFollowed = await User.findById(req.userAuth);
    //3. Check if user and userWhoUnFollowed are found
    if (userToBeUnfollowed && userWhoUnFollowed) {

      // Ensure following array is initialized to avoid 'undefined' errors while using filter()
      userToBeUnfollowed.followers = userToBeUnfollowed.followers || [];
      userWhoUnFollowed.following = userWhoUnFollowed.following || [];

      //4. Check if userWhoUnfollowed is already in the user's followers array
      const isUserAlreadyFollowed = userToBeUnfollowed.followers.find(
        follower => follower.toString() === userWhoUnFollowed._id.toString()
      );
      if (!isUserAlreadyFollowed) {
        return next(appError("You have not followed this user. "))
        //return next(appError("You already followed this user. "))
      } else {
        //5. Remove userWhoUnFollowed from the user's followers array
        userToBeUnfollowed.followers = userToBeUnfollowed.followers.filter(
          follower => follower.toString() !== userWhoUnFollowed._id.toString()
        );
        //save the user
        await userToBeUnfollowed.save();
        //7. Remove userToBeInfollowed from the userWhoUnfollowed's following array
        userWhoUnFollowed.following = userWhoUnFollowed.following.filter(
          following =>
            following.toString() !== userToBeUnfollowed._id.toString()
        );

        //8. save the user
        await userWhoUnFollowed.save();
        res.json({
          status: "success",
          data: "You have successfully unfollowed this user",
        });
      }
    }
  } catch (error) {
    next(appError(error.message));
  }
};

// Block
const blockedUserCtrl = async (req, res,next) => {
  try {
    // 1. Find the user to be blocked.
    const userToBeBlocked = await User.findById(req.params.id); 

    // 2. Find the user who is blocking.
    const userWhoIsBlocking = await User.findById(req.userAuth); 

    userWhoIsBlocking.blocked = userWhoIsBlocking.blocked || [];

    //3. Check if userToBeBlocked and userWhoIsBlocking are found
    if(userToBeBlocked && userWhoIsBlocking){
        // 4. Check that if the user is already blocked the user 
        const isUserAlreadyBlocked = userWhoIsBlocking.blocked.find((blocked) => blocked.toString() === userToBeBlocked._id.toString());
        
        if(isUserAlreadyBlocked){
          return next(appError("You have already blocked this user. "))
        }
        else{
          // 5. Push the user to be blocked into the user who will block.
          userWhoIsBlocking.blocked.push(userToBeBlocked._id)
          
          // 6. save 
          await userWhoIsBlocking.save()

           res.json({
          status: 'Success',
          data: 'You have successfully blocked this user.',
        })
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
  followingCtrl,
  unFollowCtrl,
  blockedUserCtrl
}
