const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');
const authMiddleware = require('../middleware/authMiddleware');

// Follow a user
router.post('/:userId', authMiddleware, followController.followUser);

// Unfollow a user
router.delete('/:userId', authMiddleware, followController.unfollowUser);

// Get followers of a user
router.get('/:userId/followers', followController.getFollowers);

// Get users followed by a user
router.get('/:userId/following', followController.getFollowing);

module.exports = router;
