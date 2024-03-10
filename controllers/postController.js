const Post = require('../models/post');

const createPost = async (req, res) => {
  try {
    const post = new Post({ ...req.body, user: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json({ msg: 'Post deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { createPost, getPost, updatePost, deletePost };
