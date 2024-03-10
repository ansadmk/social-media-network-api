const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a post
router.post('/', authMiddleware, postController.createPost);

// Get a post
router.get('/:postId', postController.getPost);

// Update a post
router.put('/:postId', authMiddleware, postController.updatePost);

// Delete a post
router.delete('/:postId', authMiddleware, postController.deletePost);

module.exports = router;
