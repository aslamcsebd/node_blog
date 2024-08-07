const http = require('http');
const port = 3000;
const express = require('express');
const app = express();

const postsRoute = require('./routers/posts');

app.use('/posts', postsRoute);

const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Server running: ${port}`);
});