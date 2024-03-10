require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./utils/errorHandler');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const followRouter = require('./routes/follows');

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/follows', followRouter);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
