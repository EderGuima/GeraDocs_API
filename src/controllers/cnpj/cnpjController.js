const express = require('express');
const router = express.Router();
const cnpj = require('./cnpjService');

router.get('/', async function (req, res) {
    const response = await cnpj.getOne(req, res);
    res.json({ cnpj: response });
});

router.get('/:quantity', async function (req, res) {
    const response = await cnpj.get(req, res);
    res.json({ quantityRequested: req.params.quantity, cnpj: response });
});

router.post('/:cnpj', async function (req, res) {
    const response = await cnpj.postOne(req, res);
    res.json({ isValidCnpj: response });
});

router.post('/', async function (req, res) {
    const response = await cnpj.post(req, res);
    res.json({ cnpjsVerified: response });
});

module.exports = router;