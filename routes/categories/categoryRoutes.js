<<<<<<< HEAD
const express = require('express')
const categoryRouter = express.Router()

//POST/api/v1/categories
categoryRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'category created.',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//GET/api/v1/categories/:id
categoryRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//DELETE/api/v1/categories/:id
categoryRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'delete Category route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//PUT/api/v1/categories/:id
categoryRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'update category route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

module.exports = categoryRouter
=======
const express = require('express')
const categoryRouter = express.Router()

//POST/api/v1/categories
categoryRouter.post('/', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'category created.',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//GET/api/v1/categories/:id
categoryRouter.get('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//DELETE/api/v1/categories/:id
categoryRouter.delete('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'delete Category route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

//PUT/api/v1/categories/:id
categoryRouter.put('/:id', async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'update category route',
    })
  } catch (error) {
    res.json(error.message)
  }
})

module.exports = categoryRouter
>>>>>>> d0731d28d46a4796adfe279fa933de84ae732c96
