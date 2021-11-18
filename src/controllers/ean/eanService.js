const eanFunctions = require("./eanFunctions")

module.exports = {
    async getOne(req, res) {
        let validEan = await eanFunctions.getEan();
        return validEan;
    },

    async get(req, res) {
        const quantity = req.params.quantity;
        const validEans = [];
        for (i = 0; i < quantity; i++) {
            let ean = await eanFunctions.getEan();
            validEans.push(ean);
        }
        return validEans;
    },

    async postOne(req, res) {
        const ean = req.params.ean;
        let validEan = await eanFunctions.validEan(ean);
        return validEan;
    },

    async post(req, res) {
        if (!req.body.eans) {
            res.status(400).json({
                message: 'Informar os Eans pelo Body formato: {“eans”:[“ean_num1”,“ean_num2”]}'
            });
        } else {
            const eanList = req.body.eans;
            const validEans = [];
            for (i = 0; i < eanList.length; i++) {
                let validEan = await eanFunctions.validEan(eanList[i]);
                validEans.push({ ean: eanList[i], isValid: validEan });
            }
            return validEans;
        }
    }
}