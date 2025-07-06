const express = require('express')

const postRouter = express.Router()

//POST/api/v1/posts
postRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'post created.',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//GET/api/v1/posts/:id
postRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Post route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//GET/api/v1/posts
postRouter.get('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'posts route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//DELETE/api/v1/posts/:id
postRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'delete posts route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//PUT/api/v1/posts/:id
postRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'update post route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

module.exports = postRouter
