const express = require('express');
const rutaAuth = require('./routes/auth');
const server = express();



server.use('/auth',rutaAuth);



app.listen(8080);