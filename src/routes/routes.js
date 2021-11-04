const express = require('express');
const user = require('../controllers/user/userController');
// const products = require('../controllers/user/userController');
const router = express.Router();

router.use('/user', user)
// router.use('/products', user)

module.exports = router;