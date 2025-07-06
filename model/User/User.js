const { string } = require('i/lib/util')
const mongoose = require('mongoose')

//Create UserSchema

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'First Name is required'],
    },
    lastname: {
      type: String,
      required: [true, 'Last Name is required'],
    },
    profilephoto: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ['Admin', 'Guest', 'Editor'],
    },
    viewers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    followings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    blocked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    plan: [
      {
        type: String,
        enum: ['Free', 'Premium', 'Pro'],
        default: 'Free',
      },
    ],
    userAward: [
      {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold'],
        default: 'Bronze',
      },
    ],
  },
  {
    timestamps: true,
  }
)

// Compile the usermodel
const User = mongoose.model('User', UserSchema)

module.exports = User

// Note down the embedding way and Referencing way in the Notebook
