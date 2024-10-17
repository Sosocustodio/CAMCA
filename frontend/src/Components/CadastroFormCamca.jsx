import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/cadastro.css';
import logo from '../imagens/logo.png';
import camquinhoo from '../imagens/camquinhoo.png';

const CadastroFormCamca = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    telefone: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        endereco: '',
        telefone: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };
  
  return (
    <Form onSubmit={handleSubmit} className='formu'>
      <img src={logo} alt="Logo" className='logoformca' />
      <h6 className='text1'>
        (Centro de atendimento e medicamentos para crianças e adolescentes)
      </h6>
      <h2 className='textform'>Cadastre-se</h2>
      {error && <div className='error-message'>{error}</div>}
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className='inputs'
            />
          </Form.Group>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              className='inputs'
            />
          </Form.Group>
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              className='inputs'
            />
          </Form.Group>
          <Button
            type='submit'
            variant="primary"
            className='botaocard'
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Cadastre-se'}
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className='inputs'
            />
          </Form.Group>
          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
              className='inputs'
            />
          </Form.Group>
          <Form.Group controlId="formSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              className='inputs'
            />
          </Form.Group>
          <img src={camquinhoo} alt="Camquinhoo" className='camquinhoca' />
        </Col>
      </Row>
    </Form>
  );
};

export default CadastroFormCamca;
