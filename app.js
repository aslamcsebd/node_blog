const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const postsRoute = require('./routers/posts');
const userRoute = require('./routers/user');

app.use(bodyParser.json());

// Route with prefix
app.use('/posts', postsRoute);
app.use('/user', userRoute);

// server run here
const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Server running: ${port}`);
});