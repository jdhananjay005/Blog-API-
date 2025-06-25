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

dbConnect();