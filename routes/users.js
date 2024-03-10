const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Create user profile
router.post('/', authMiddleware, userController.createUser);

// Get user profile
router.get('/:userId', userController.getUser);

// Update user profile
router.put('/:userId', authMiddleware, userController.updateUser);

// Delete user profile
router.delete('/:userId', authMiddleware, userController.deleteUser);

module.exports = router;
