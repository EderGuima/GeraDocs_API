require("dotenv").config();
var express = require('express');
var app = express();
const route = require('./src/routes/routes')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', route)

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
});