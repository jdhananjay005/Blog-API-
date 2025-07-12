<<<<<<< HEAD
const mongoose = require('mongoose')

//Create Post Schema 

const commentSchema = new mongoose.Schema({
    post :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : [true, 'Post is required']  
    },
    user :{
        type : Object,
        required : [true, 'User is required']  
    },
    description :{
        type : String,
        required : [true, 'Description is required']  
    }
},{
    timestamps : true
});

// Compile the usermodel 
const Comment = mongoose.model('Comment', commentSchema)

=======
const mongoose = require('mongoose')

//Create Post Schema 

const commentSchema = new mongoose.Schema({
    post :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : [true, 'Post is required']  
    },
    user :{
        type : Object,
        required : [true, 'User is required']  
    },
    description :{
        type : String,
        required : [true, 'Description is required']  
    }
},{
    timestamps : true
});

// Compile the usermodel 
const Comment = mongoose.model('Comment', commentSchema)

>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
module.exports = Comment