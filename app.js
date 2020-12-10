const express = require('express');
const path = require('path')


const rutaAuth = require('./routes/auth');
const homeRouter = require('./routes/home')
const blogRouter = require('./routes/blog')
const contactRouter = require('./routes/contact')


const server = express();
server.use(express.static(path.join(__dirname,'public')))

server.use('/',homeRouter);
server.use('/blog',blogRouter);
server.use('/contact',contactRouter);
server.use('/auth',rutaAuth);



server.listen(8080);