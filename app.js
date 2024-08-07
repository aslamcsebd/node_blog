const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const postsRoute = require('./routers/posts');
app.use(bodyParser.json());

app.use('/posts', postsRoute);

// server run here
const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Server running: ${port}`);
});