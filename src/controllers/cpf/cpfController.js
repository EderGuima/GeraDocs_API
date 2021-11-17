const express = require('express');
const router = express.Router();
const cpf = require('./cpfService');

router.get('/', async function (req, res) {
    const response = await cpf.getOne(req, res);
    res.json({ cpf: response });
});

router.get('/:quantity', async function (req, res) {
    const response = await cpf.get(req, res);
    res.json({ quantityRequested: req.params.quantity, cpf: response });
});

router.post('/:cpf', async function (req, res) {
    const response = await cpf.postOne(req, res);
    res.json({ isValidCpf: response });
});

router.post('/', async function (req, res) {
    const response = await cpf.post(req, res);
    res.json({ cpfsVerified: response });
});

module.exports = router;