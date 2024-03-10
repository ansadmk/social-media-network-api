const Follow = require('../models/follow');

const followUser = async (req, res) => {
  try {
    const follow = new Follow({
      follower: req.user.id,
      following: req.params.userId,
    });
    await follow.save();
    res.status(201).json(follow);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const unfollowUser = async (req, res) => {
  try {
    await Follow.findOneAndDelete({
      follower: req.user.id,
      following: req.params.userId,
    });
    res.json({ msg: 'Unfollowed user' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getFollowers = async (req, res) => {
  try {
    const followers = await Follow.find({ following: req.params.userId })
      .populate('follower', 'username bio profilePictureUrl');
    res.json(followers.map(follow => follow.follower));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getFollowing = async (req, res) => {
  try {
    const following = await Follow.find({ follower: req.params.userId })
      .populate('following', 'username bio profilePictureUrl');
    res.json(following.map(follow => follow.following));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { followUser, unfollowUser, getFollowers, getFollowing };
