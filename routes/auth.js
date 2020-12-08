const express = require('express');
const controller = require('../controllers/auth');
const rutaAuth = express.Router();


rutaAuth.get('/', controller.cargarAuth);


module.exports = rutaAuth;