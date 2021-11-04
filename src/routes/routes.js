const express = require('express');
const user = require('../controllers/user/userController');
const auth = require('../controllers/user/userAuthenticate');
const router = express.Router();

router.post('/login', function (req, res) {
    const user = await user.login(req, res);
    return auth.getToken(user.id)
});

router.get('/', auth.validToken, function (req, res) {
    user.get(req, res);
});

router.get('/:id', auth.validToken, function (req, res) {
    user.getOne(req, res);
});

//alterar para pegar do body
router.post('/incluir', function (req, res) {
    user.post(req, res);
});

module.exports = router;