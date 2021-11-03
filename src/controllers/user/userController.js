const db = require('../../db/config')

module.exports = {
    async get(req, res) {
        console.log(req.params.id)
        var proximo = parseInt(req.params.id) + 1;
        const client = await db.connect();
        const response = await client.query('SELECT * FROM clientes WHERE id = $1 OR id = $2', [req.params.id, proximo]);
        client.release()
        res.send(response.rows);
    }
}