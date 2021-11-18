const express = require('express');
const router = express.Router();
const ean = require('./eanService');

router.get('/', async function (req, res) {
    const response = await ean.getOne(req, res);
    res.json({ ean: response });
});

router.get('/:quantity', async function (req, res) {
    const response = await ean.get(req, res);
    res.json({ quantityRequested: req.params.quantity, ean: response });
});

router.post('/:ean', async function (req, res) {
    const response = await ean.postOne(req, res);
    res.json({ isValidEan: response });
});

router.post('/', async function (req, res) {
    const response = await ean.post(req, res);
    res.json({ eansVerified: response });
});

module.exports = router;