const express = require('express');
const connection = require('./db'); // Ajuste o caminho para seu arquivo de conexão com o banco
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastros', (req, res) => {
  connection.query('SELECT * FROM cadastro', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM cadastro WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/cadastros', (req, res) => {
  const { nome, email, cpf, endereco, telefone, senha } = req.body;
  connection.query('INSERT INTO cadastro (nome, email, cpf, endereco, telefone, senha) VALUES (?, ?, ?, ?, ?, ?)',
    [nome, email, cpf, endereco, telefone, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, cpf, endereco, telefone, senha } = req.body;
  connection.query('UPDATE cadastro SET nome = ?, email = ?, cpf = ?, endereco = ?, telefone = ?, senha = ? WHERE id = ?',
    [nome, email, cpf, endereco, telefone, senha, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastros/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM cadastro WHERE idCadastro = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

// Função de login
router.post('/login', (req, res) => {
  const { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
  }

  const query = 'SELECT * FROM cadastro WHERE cpf = ? AND senha = ?';

  connection.query(query, [cpf, senha], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (results.length > 0) {
      req.session.user = { cpf }; // Armazena o usuário na sessão
      return res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
      return res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }
  });
});

// Rota da página home
router.get('/', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Não autenticado' }); // Retorna um erro se não estiver autenticado
  }
  res.send(`Bem-vindo, ${req.session.user.cpf}!`); // Mensagem de boas-vindas
});

module.exports = router;
