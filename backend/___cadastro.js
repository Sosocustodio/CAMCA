const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/cadastros', (req, res) => {
  connection.query('SELECT * FROM  cadastro', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para criar um novo registro
router.post('/cadastros', (req, res) => {
  const { nome, email, cpf, endereco, telefone, senha } = req.body;
  connection.query(
    'INSERT INTO cadastro (nome, email, telefone, cpf, endereco, senha) VALUES (?, ?, ?, ?, ?, ?)',
    [nome, email, telefone, cpf, endereco, senha],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        return res.status(500).json({ error: 'Erro ao criar o registro' });
      }
      res.status(201).json({ message: 'Registro criado com sucesso', idCadastro: result.insertId });
    }
  );
});

// Rota para criar um novo registro
router.post('/cadastros', (req, res) => {
  const { nome, email, cpf, endereco, telefone, senha } = req.body;
  connection.query(
    'INSERT INTO cadastro (nome, email, telefone, cpf, endereco, senha) VALUES (?, ?, ?, ?, ?, ?)',
    [nome, email, telefone, cpf, endereco, senha],
    (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        return res.status(500).json({ error: 'Erro ao criar o registro' });
      }
      res.status(201).json({ message: 'Registro criado com sucesso', idCadastro: result.insertId });
    }
  );
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastros/:idCadastro', (req, res) => {
  const { id } = req.params;
  const { nome, email, cpf, endereco, telefone, senha } = req.body;
  connection.query('UPDATE cadastro SET nome = ?, email = ?, telefone = ?, cpf = ?, endereco = ?, senha = ? WHERE idCadastro = ?', 
    [nome, email, telefone, cpf, endereco, senha], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar o registro:', err);
      res.status(500).json({ error: 'Erro ao atualizar o registro' });
      return;
    }
    res.json({ message: 'Registro atualizado com sucesso' });
  });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastros/:idCadastro', (req, res) => {
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

module.exports = router;