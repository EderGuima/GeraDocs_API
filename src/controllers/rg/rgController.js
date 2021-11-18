const express = require('express');
const router = express.Router();
const rg = require('./rgService');

router.get('/', async function (req, res) {
    const response = await rg.getOne(req, res);
    res.json({ rg: response });
});

router.get('/:quantity', async function (req, res) {
    const response = await rg.get(req, res);
    res.json({ quantityRequested: req.params.quantity, rg: response });
});

router.post('/:rg', async function (req, res) {
    const response = await rg.postOne(req, res);
    res.json({ isValidRg: response });
});

router.post('/', async function (req, res) {
    const response = await rg.post(req, res);
    res.json({ rgsVerified: response });
});

module.exports = router;