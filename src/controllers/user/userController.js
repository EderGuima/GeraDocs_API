const db = require('../../db/config')

module.exports = {
    async get(req, res) {
        const client = await db.connect();
        const response = await client.query('SELECT * FROM clientes');
        res.setHeader('Content-Type', 'application/json');
        if (isEmpty(response.rows)) {
            res.send("Nenhum registro encontrado");
        } else {
            res.send(JSON.stringify(response.rows));
        }
        client.release()
    },

    async getOne(req, res) {
        const id = req.params.id;
        const client = await db.connect();
        const response = await client.query("SELECT * FROM clientes WHERE id = $1", [id]);
        res.setHeader('Content-Type', 'application/json');
        if (isEmpty(response.rows)) {
            res.send("Nenhum registro encontrado com id: " + id);
        } else {
            res.send(JSON.stringify(response.rows));
        }
        client.release()
    },

    async post(req, res) {
        const client = await db.connect();
        const response = await client.query(
            'INSERT INTO clientes(nome,username,password) VALUES ($1,$2,$3);',
            [req.params.nome, req.params.username, req.params.password]);
        res.setHeader('Content-Type', 'application/json');
        if (response.rowCount > 0) {
            res.send("Registro adicionado com sucesso");
        } else {
            res.send("Erro")
        }
        client.release()
    }
}

function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}