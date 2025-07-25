// Require the Cloudinary library
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
require('dotenv').config()
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
})

// Instance of the Cloudinary Storage.

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'jpeg', 'png'],
  params: {
    folder: 'Blog-Api',
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
})

module.exports = storage
