const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Rota de autenticação
app.post('/login', (req, res) => {
    const { cpf, senha } = req.body;
  
    // Consulta para verificar se o usuário existe
    const query = 'SELECT * FROM cadastro WHERE cpf = ? AND senha = ?';
    connection.query(query, [cpf, senha], (err, results) => {
      if (err) {
        console.error('Erro ao consultar o banco de dados:', err);
        res.status(500).send('Erro no servidor');
        return;
      }
  
      if (results.length > 0) {
        res.send('Login bem-sucedido!');
      } else {
        res.status(401).send('CPF ou senha incorretos');
      }
    });
  });