const express = require('express');
const router = express.Router();
const imei = require('./imeiService');

router.get('/', async function (req, res) {
    const response = await imei.getOne(req, res);
    res.json({ imei: response });
});

router.get('/:quantity', async function (req, res) {
    const response = await imei.get(req, res);
    res.json({ quantityRequested: req.params.quantity, imei: response });
});

router.post('/:imei', async function (req, res) {
    const response = await imei.postOne(req, res);
    res.json({ isValidImei: response });
});

router.post('/', async function (req, res) {
    const response = await imei.post(req, res);
    res.json({ imeisVerified: response });
});

module.exports = router;