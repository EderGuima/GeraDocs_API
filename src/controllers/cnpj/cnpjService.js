const cnpjFunctions = require("./cnpjFunctions")

module.exports = {
    async getOne(req, res) {
        let validCnpj = await cnpjFunctions.getCnpj();
        return validCnpj;
    },

    async get(req, res) {
        const quantity = req.params.quantity;
        const validCnpjs = [];
        for (i = 0; i < quantity; i++) {
            let cnpj = await cnpjFunctions.getCnpj();
            validCnpjs.push(cnpj);
        }
        return validCnpjs;
    },

    async postOne(req, res) {
        const cnpj = req.params.cnpj;
        let validCnpj = await cnpjFunctions.validCnpj(cnpj);
        return validCnpj;
    },

    async post(req, res) {
        if (!req.body.cnpjs) {
            res.status(400).json({
                message: 'Informar os Cnpjs pelo Body formato: {“cnpjs”:[“cnpj_num1”,“cnpj_num2”]}'
            });
        } else {
            const cnpjList = req.body.cnpjs;
            const validCnpjs = [];
            for (i = 0; i < cnpjList.length; i++) {
                let validCnpj = await cnpjFunctions.validCnpj(cnpjList[i]);
                validCnpjs.push({ cnpj: cnpjList[i], isValid: validCnpj });
            }
            return validCnpjs;
        }
    }
}