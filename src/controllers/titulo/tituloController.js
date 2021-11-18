const express = require('express');
const router = express.Router();
const titulo = require('./tituloService');

router.get('/', async function (req, res) {
    const response = await titulo.getOne(req, res);
    res.json({ titulo: response });
});

router.get('/:quantity', async function (req, res) {
    const response = await titulo.get(req, res);
    res.json({ quantityRequested: req.params.quantity, titulo: response });
});

router.post('/:titulo', async function (req, res) {
    const response = await titulo.postOne(req, res);
    res.json({ isValidTitulo: response });
});

router.post('/', async function (req, res) {
    const response = await titulo.post(req, res);
    res.json({ titulosVerified: response });
});

module.exports = router;