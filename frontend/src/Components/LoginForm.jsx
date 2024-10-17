// src/Login.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/login.css';
import logo from '../imagens/logo.png';
import camquinhoo from '../imagens/camquinhoo.png';

const Login = () => {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Fazendo a requisição para o servidor Node.js
            const response = await fetch('http://localhost:3001/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ cpf: cpf, senha: senha }), // username mapeado para CPF
              mode: 'cors', // Adicionando CORS
            });
            
            if (response.ok) {
              // Se o login for bem-sucedido
              setIsLoggedIn(true);
              setError('');
              window.location.href = 'http://localhost:3000';
            } else {
              // Se o login falhar
              setError('CPF ou senha incorretos!');
            }
          } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Erro ao conectar com o servidor.');
          }
        };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Bem-vindo!</h2>
                    <button onClick={() => setIsLoggedIn(false)}>Deslogar</button>
                </div>
            ) : (
                <Form onSubmit={handleLogin} className='formulo'>
                    <img src={logo} className='logoformlo' alt="Logo" />
                    <h6 className='text1'>(Centro de atendimento e medicamentos para crianças e adolescentes)</h6>
                    <h2 className='textformlo'>Login</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Form.Control
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                        placeholder="CPF"
                        className='cpf'
                    />
                    <Form.Control
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        placeholder="Senha"
                        className='senha'
                    />
                    <Button type="submit" className='botaocardlo'>Entrar</Button>
                    <img src={camquinhoo} className='camquinhoolo' alt="Camquinhoo" />
                </Form>
            )}
        </div>
    );
};

export default Login;
