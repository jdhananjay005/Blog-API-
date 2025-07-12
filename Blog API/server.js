const express = require('express');
require('dotenv').config()

require('./config/dbConnect')
const app = express();

const PORT = process.env.PORT || 8000

// Middlewares 
// ---- 
// Routes 
// ----

//---------------
// users Route
// --------------

//POST/api/v1/users/register
app.post('api/v1/users/register', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'user registered.'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//POST/api/v1/users/login
app.post('api/v1/users/login', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'user login.'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//GET/api/v1/users/:id
app.get('api/v1/users/profile/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'Profile route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//GET/api/v1/users
app.get('api/v1/users', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'users route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//DELETE/api/v1/users/:id
app.delete('api/v1/users/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'delete user route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//PUT/api/v1/users/:id
app.put('api/v1/users/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'update user route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

// -------------------------
// Post Route 
// -------------------------

//POST/api/v1/posts
app.post('api/v1/posts', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'post created.'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//GET/api/v1/posts/:id
app.get('api/v1/posts/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'Post route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//GET/api/v1/posts
app.get('api/v1/posts', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'posts route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//DELETE/api/v1/posts/:id
app.delete('api/v1/posts/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'delete posts route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//PUT/api/v1/users/:id
app.put('api/v1/posts/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'update post route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

// ----------------
// Comment Route 
// ----------------

//POST/api/v1/comments
app.post('api/v1/comments', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'comment created.'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//GET/api/v1/comments/:id
app.get('api/v1/comments/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'Comments route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//DELETE/api/v1/comments/:id
app.delete('api/v1/comments/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'delete Comments route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//PUT/api/v1/Comments/:id
app.put('api/v1/Comments/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'update comment route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

// -----------------
// categories Route
// ----------------

//POST/api/v1/categories
app.post('api/v1/categories', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'category created.'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//GET/api/v1/categories/:id
app.get('api/v1/categories/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'Category route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//DELETE/api/v1/categories/:id
app.delete('api/v1/categories/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'delete Category route'
        })
    } catch (error) {
        res.json(error.message)
    }
})

//PUT/api/v1/categories/:id
app.put('api/v1/categories/:id', async ()=> {
    try {
        res.json({
            status : 'Success',
            data : 'update comment route'
        })
    } catch (error) {
        res.json(error.message)
    }
})























// Error handles for Middlewares

app.listen(PORT, (req,res)=>{
    console.log(`Server is listening on port ${PORT}`)
})