const express = require('express');
const { userSignUp, userLogin, getUserById } = require('../controller/userController');
const router = express.Router();

router.post('/signup', userSignUp);

router.post('/login', userLogin);

router.get('/user/:id', getUserById);

module.exports = router;