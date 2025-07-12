<<<<<<< HEAD
const mongoose = require('mongoose')

//Create Post Schema

const categorySchema = new mongoose.Schema ({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    title :{
        type : String,
        required : true
    },
},{
    timestamps: true
})

const Category = mongoose.model("Category",categorySchema)
=======
const mongoose = require('mongoose')

//Create Post Schema

const categorySchema = new mongoose.Schema ({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    title :{
        type : String,
        required : true
    },
},{
    timestamps: true
})

const Category = mongoose.model("Category",categorySchema)
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
module.exports = Category