module.exports = {
    async authenticate(username, password) {
        //consulta no banco o usuário.
        if (username === 'admin' && password === 'admin') {
            const id = 2; //esse id viria do banco de dados
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.json({ auth: true, token: token, id: id });
        }
        res.status(500).json({ message: 'Login inválido!' });
    }
}