const express = require('express');
const router = express.Router();
const auth = require('./userAuthenticate');
const user = require('./userService');
const isempty = require('../../utils/functions')

router.post('/login', async function (req, res) {
    const response = await user.login(req, res);
    if (isempty.isEmpty(response)) {
        res.status(400).json({ message: "Nenhum registro encontrado" });
    } else {
        const token = await auth.getToken(response[0].id)
        res.json({ token: token });
    }
});

router.get('/', auth.validToken, async function (req, res) {
    const response = await user.get(req, res);
    if (isempty.isEmpty(response)) {
        res.status(400).json({ message: "Nenhum registro encontrado" });
    } else {
        res.json({ response: response });
    }
});

router.get('/:id', auth.validToken, async function (req, res) {
    const response = await user.getOne(req, res);
    if (isempty.isEmpty(response)) {
        res.status(400).json({ message: "Nenhum registro encontrado" });
    } else {
        res.json({ response: response });
    }
});

router.post('/incluir', async function (req, res) {
    const response = await user.post(req, res);
    if (isempty.isEmpty(response)) {
        res.status(400).json({ message: "Nenhum registro encontrado" });
    } else {
        res.json({ response: response });
    }
});

//colocar em outro arquivo


module.exports = router;