const mongoose = require('mongoose')

//Create Post Schema 

const postSchema = new mongoose.Schema({
    title :{
        type : String,
        required : [true, 'Post Title is required'],
        trim: true // We don't want any white space around the title so used trim. 
    },
    description :{
        type : String,
        required : [true, 'Post description is required']
    },
    category :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : [true, 'Post category is required']
    },
    numViews : [{
        type : mongoose.Schema.Types.ObjectId, // Who's going to view my post 
        ref : "User"
    }],
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    dislikes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true, 'Please Author is required']
    },
    photo : {
        type : String,
        required : [true, 'Photo Image is required']
    },
},{
    timestamps: true
})

// Compile the usermodel 
const post = mongoose.model('Post', postSchema)

module.exports = Post