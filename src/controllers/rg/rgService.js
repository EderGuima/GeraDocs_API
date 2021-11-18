const rgFunctions = require("./rgFunctions")

module.exports = {
    async getOne(req, res) {
        let validRg = await rgFunctions.getRg();
        return validRg;
    },

    async get(req, res) {
        const quantity = req.params.quantity;
        const validRgs = [];
        for (i = 0; i < quantity; i++) {
            let rg = await rgFunctions.getRg();
            validRgs.push(rg);
        }
        return validRgs;
    },

    async postOne(req, res) {
        const rg = req.params.rg;
        let validRg = await rgFunctions.validRg(rg);
        return validRg;
    },

    async post(req, res) {
        if (!req.body.rgs) {
            res.status(400).json({
                message: 'Informar os Títulos de Eleitores pelo Body formato: {“rgs”:[“rg_num1”,“rg_num2”]}'
            });
        } else {
            const rgList = req.body.rgs;
            const validRgs = [];
            for (i = 0; i < rgList.length; i++) {
                let validRg = await rgFunctions.validRg(rgList[i]);
                validRgs.push({ rg: rgList[i], isValid: validRg });
            }
            return validRgs;
        }
    }
}