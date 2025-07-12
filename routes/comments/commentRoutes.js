<<<<<<< HEAD
const express = require('express')
const commentRouter = express.Router()

//POST/api/v1/comments
commentRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'comment created.',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//GET/api/v1/comments/:id
commentRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Comments route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//DELETE/api/v1/comments/:id
commentRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'delete Comments route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//PUT/api/v1/Comments/:id
commentRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'update comment route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

module.exports = commentRouter
=======
const express = require('express')
const commentRouter = express.Router()

//POST/api/v1/comments
commentRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'comment created.',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//GET/api/v1/comments/:id
commentRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Comments route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//DELETE/api/v1/comments/:id
commentRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'delete Comments route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//PUT/api/v1/Comments/:id
commentRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'update comment route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

module.exports = commentRouter
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
