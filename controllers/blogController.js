const mongoose = require('mongoose')
const Blog = require('../models/blogModel')
// get all Blogs
const getBlogs = async (req, res) => {
  res.status(200).json({ message: 'Hello from getBlogs' })
}

// Add one Blog
const addBlog = async (req, res) => {
  res.status(200).json({ message: 'Hello from addBlog' })
}

// Get Blog by ID
const getBlog = async (req, res) => {
  res.status(200).json({ message: 'Hello from getBlog' })
}

// Delete Blog by ID
const deleteBlog = async (req, res) => {
  res.status(200).json({ message: 'Hello from deleteBlog' })
}

// Update Blog by ID
const updateBlog = async (req, res) => {
  res.status(200).json({ message: 'Hello from updateBlog' })
}

module.exports = {
  getBlogs,
  addBlog,
  getBlog,
  deleteBlog,
  updateBlog,
}
