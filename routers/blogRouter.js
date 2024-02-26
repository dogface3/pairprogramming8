const express = require('express')
const router = express.Router()
const {
  getBlogs,
  addBlog,
  getBlog,
  deleteBlog,
  updateBlog,
} = require('../controllers/blogController')

const requireAuth = require('../middleware/requireAuth')

// require auth for all workout routes
router.use(requireAuth)

// GET all TodoTasks
router.get('/', getBlogs)

// POST a new TodoTask
router.post('/', addBlog)

// GET a single TodoTask
router.get('/:id', getBlog)

// DELETE a TodoTask
router.delete('/:id', deleteBlog)

// Update TodoTask using PUT
router.put('/:id', updateBlog)

module.exports = router
