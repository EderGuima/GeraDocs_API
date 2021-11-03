const express = require('express');
const user = require('../controllers/user/userController');
const auth = require('../controllers/user/userAuthenticate');
const router = express.Router();

router.get('/', function (req, res) {
    auth.basicAuth(req, res)
    user.get(req, res);
});

router.get('/:id', function (req, res) {
    auth.basicAuth(req, res)
    user.getOne(req, res);
});

router.post('/:nome&:username&:password', function (req, res) {
    user.post(req, res);
});

module.exports = router;