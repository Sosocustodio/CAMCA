import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../imagens/logo.png';
import navbar from '../css/navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavDropdown title="Navegação Rápida" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><Link className='linkNav' to="/">Home</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            <Link className='linkNav' to="/contato">Contato</Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"><Link className='linkNav' to="/minhaConta">Minha Conta</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"><Link className='linkNav' to="/cadastro">Cadastro</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            <Link className='linkNav' to="/ListaUsuarios">Controle de Saídas</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Faça seu Pedido</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img src={logo} className='logonav' />
        <button className="donate-button">
          Doe Agora <span className="heart">&#10084;</span>
        </button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

