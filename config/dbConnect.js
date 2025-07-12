<<<<<<< HEAD
const mongoose = require('mongoose')


// function for the connection 
const dbConnect = async () =>{

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

=======
const mongoose = require('mongoose')


// function for the connection 
const dbConnect = async () =>{

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
dbConnect();