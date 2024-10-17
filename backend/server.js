const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session'); // Adicione esta linha
const routes = require('./routes');

const app = express();
const port = 3001;

// Middleware para análise do corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Configuração da sessão
app.use(session({
    secret: 'nossa_chave', // Substitua por uma string secreta
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Defina como true se usar HTTPS
}));

// Usa as rotas do backend
app.use('/api', routes);

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
