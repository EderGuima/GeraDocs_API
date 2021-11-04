const express = require('express');
const router = express.Router();
const auth = require('./userAuthenticate');
const user = require('./userService');

router.post('/login', async function (req, res) {
    const response = await user.login(req, res);
    if (isEmpty(response)) {
        res.status(400).json({ message: "Nenhum registro encontrado" });
    } else {
        const token = await auth.getToken(response[0].id)
        res.json({ token: token });
    }
});

router.get('/', auth.validToken, function (req, res) {
    const response = user.get(req, res);
    if (isEmpty(response)) {
        res.status(400).json({ message: "Nenhum registro encontrado" });
    } else {
        res.json({ response: response });
    }
});

router.get('/:id', auth.validToken, function (req, res) {
    user.getOne(req, res);
});

//alterar para pegar do body
router.post('/incluir', function (req, res) {
    user.post(req, res);
});

//colocar em outro arquivo
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

module.exports = router;