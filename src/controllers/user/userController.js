const db = require('../../db/config')

module.exports = {
    
    async login(req, res) {
        // check for basic auth header
        if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
            return res.status(401).json({ message: 'Missing Authorization Header' }).end();
        }

        // verify auth credentials
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        const user = await userService.authenticate({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid Authentication Credentials' }).end();
        }
        
        return user
    },

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

        //por exemplo, se enviar um pdf eu tenho que alterar - para cada tipo de retorno.
        // se for json não precisa pois é o padrão
        // res.setHeader('Content-Type', 'application/json');

        if (isEmpty(response.rows)) {
            res.send("Nenhum registro encontrado com id: " + id);
        } else {
            res.send(JSON.stringify(response.rows));
        }
        client.release()
    },

    async post(req, res) {
        if (!req.body.data) {
            return res.status(400).json({ message: 'Missing Body' })
        } else {
            const client = await db.connect();
            const response = await client.query(
                'INSERT INTO clientes(nome,username,password) VALUES ($1,$2,$3);',
                [req.body.nome, req.body.username, req.body.password]);

            res.setHeader('Content-Type', 'application/json');

            if (response.rowCount > 0) {
                res.send("Registro adicionado com sucesso");
            } else {
                res.send("Erro na inclusão")
            }
            client.release()
        }
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