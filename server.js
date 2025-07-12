const express = require('express')

const userRouter = require('./routes/users/userRoutes')
const postRouter = require('./routes/posts/postRoutes')
const commentRouter = require('./routes/comments/commentRoutes')
const categoryRouter = require('./routes/categories/categoryRoutes')

const globalErrorHandler = require('./middlewares/globalErrorHandler')

require('dotenv').config()

require('./config/dbConnect')
const app = express()

const PORT = process.env.PORT || 8000

// Middlewares

app.use(express.json()) // passing Incoming payload.

// Routes //

// User Routes
app.use('/api/v1/users', userRouter)
// Post Route
app.use('/api/v1/posts', postRouter)
// Comment Route
app.use('/api/v1/comments', commentRouter)
// categories Route
app.use('/api/v1/categories', categoryRouter)

//404 Error handler
app.use('/{*any}', (req, res) => {
  res.status(404).json({ message: ` ${req.originalUrl} URL is Not Found` })
})

// Error handles for Middlewares
app.use(globalErrorHandler)

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`)
})
