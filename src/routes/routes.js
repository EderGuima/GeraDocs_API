const express = require('express');
const cnpj = require('../controllers/cnpj/cnpjController');
const cpf = require('../controllers/cpf/cpfController');
const imei = require('../controllers/imei/imeiController');
// const ean = require('../controllers/ean/eanController');
// const tit = require('../controllers/tit/titController');
// const rg = require('../controllers/rg/rgController');
const router = express.Router();

router.use('/cnpj', cnpj)
router.use('/cpf', cpf)
router.use('/imei', imei)
// router.use('/ean', ean)
// router.use('/tit', tit)
// router.use('/rg', rg)

module.exports = router;