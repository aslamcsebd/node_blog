const express = require('express');
const app = express();

const postsRoute = require('./routers/posts');

app.use('/posts', postsRoute);

module.exports = app;