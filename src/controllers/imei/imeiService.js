const imeiFunctions = require("./imeiFunctions")

module.exports = {
    async getOne(req, res) {
        let validImei = await imeiFunctions.getImei();
        return validImei;
    },

    async get(req, res) {
        const quantity = req.params.quantity;
        const validImeis = [];
        for (i = 0; i < quantity; i++) {
            let imei = await imeiFunctions.getImei();
            validImeis.push(imei);
        }
        return validImeis;
    },

    async postOne(req, res) {
        const imei = req.params.imei;
        let validImei = await imeiFunctions.validImei(imei);
        return validImei;
    },

    async post(req, res) {
        if (!req.body.imeis) {
            res.status(400).json({
                message: 'Informar os Imeis pelo Body formato: {“imeis”:[“imei_num1”,“imei_num2”]}'
            });
        } else {
            const imeiList = req.body.imeis;
            const validImeis = [];
            for (i = 0; i < imeiList.length; i++) {
                let validImei = await imeiFunctions.validImei(imeiList[i]);
                validImeis.push({ imei: imeiList[i], isValid: validImei });
            }
            return validImeis;
        }
    }
}