//Cadastro
import React from "react";
import CadastroFormCamca from "../Components/CadastroFormCamca";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fundo from '../imagens/fundo.jpg';
import LoginForm from '../Components/LoginForm';




const Cadastro = () => {
  const backgroundStyle = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh'
  };

  return (
    <>
      <div style={backgroundStyle}>
          <Container>
            <Row>
              <Col> <LoginForm/> </Col>
              <Col> <CadastroFormCamca/> </Col>
            </Row>
          </Container>
      </div>
    </>
  );
};

export default Cadastro;
