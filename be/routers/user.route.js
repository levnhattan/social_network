const express = require('express');
const { register } = require('../controllers/user.controller');
const route  = express.Router();

route.post('/user/register', register)
route.post('/user/login', (req, res) => {
       res.send("login")
})

module.exports = route;