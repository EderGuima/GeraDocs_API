const tituloFunctions = require("./tituloFunctions")

module.exports = {
    async getOne(req, res) {
        let validTitulo = await tituloFunctions.getTitulo();
        return validTitulo;
    },

    async get(req, res) {
        const quantity = req.params.quantity;
        const validTitulos = [];
        for (i = 0; i < quantity; i++) {
            let titulo = await tituloFunctions.getTitulo();
            validTitulos.push(titulo);
        }
        return validTitulos;
    },

    async postOne(req, res) {
        const titulo = req.params.titulo;
        let validTitulo = await tituloFunctions.validTitulo(titulo);
        return validTitulo;
    },

    async post(req, res) {
        if (!req.body.titulos) {
            res.status(400).json({
                message: 'Informar os Títulos de Eleitores pelo Body formato: {“titulos”:[“titulo_num1”,“titulo_num2”]}'
            });
        } else {
            const tituloList = req.body.titulos;
            const validTitulos = [];
            for (i = 0; i < tituloList.length; i++) {
                let validTitulo = await tituloFunctions.validTitulo(tituloList[i]);
                validTitulos.push({ titulo: tituloList[i], isValid: validTitulo });
            }
            return validTitulos;
        }
    }
}