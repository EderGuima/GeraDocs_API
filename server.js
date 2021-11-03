const app = require('express')();
const route = require('./src/routes/routes')

// CHAMA ARQUIVO DE ROTA - QUE EH O QUE IRA CONTROLAR TODAS AS REQUISICOES
app.use('/', route)

// RODANDO A APLICACAO NA PORTA SETADA
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
});