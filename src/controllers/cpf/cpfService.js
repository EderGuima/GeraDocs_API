const cpfFunctions = require("./cpfFunctions")

module.exports = {
    async getOne(req, res) {
        let validCpf = await cpfFunctions.getCpf();
        return validCpf;
    },

    async get(req, res) {
        const quantity = req.params.quantity;
        const validCpfs = [];
        for (i = 0; i < quantity; i++) {
            let cpf = await cpfFunctions.getCpf();
            validCpfs.push(cpf);
        }
        return validCpfs;
    },

    async postOne(req, res) {
        const cpf = req.params.cpf;
        let validCpf = await cpfFunctions.validCpf(cpf);
        return validCpf;
    },

    async post(req, res) {
        if (!req.body.cpfs) {
            res.status(400).json({
                message: 'Informar os Cpfs pelo Body formato: {“cpfs”:[“cpf_num1”,“cpf_num2”]}'
            });
        } else {
            const cpfList = req.body.cpfs;
            const validCpfs = [];
            for (i = 0; i < cpfList.length; i++) {
                let validCpf = await cpfFunctions.validCpf(cpfList[i]);
                validCpfs.push({ cpf: cpfList[i], isValid: validCpf });
            }
            return validCpfs;
        }
    }
}