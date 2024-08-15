// MinhaConta.js
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/Sophia.css';

const MinhaConta = () => {
  return (
    <>

      <center><h1>Processo da confirmação</h1></center>
      <div className="processo">
        <center>
          <ProgressBar className="barraProgresso">
            <ProgressBar striped variant="danger " now={105} key={1} />
            <ProgressBar variant="warning" now={105} key={1} />
            <ProgressBar striped variant="success" now={105} key={3} />
            <ProgressBar striped variant="primary" now={35} key={3} />
          </ProgressBar>
        </center>
      </div>
      <div className="Estagio">
        <div className="processoPedido">
          <h2 className="estagioPedido">Pedido feito</h2>
          <h2 className="estagioPedido">Pedido confirmado</h2>
          <h2 className="estagioPedido">Pedido em rota</h2>
          <h2 className="estagioPedido">Pedido entregue</h2>
        </div>
      </div>
    </>
  );
};

export default MinhaConta;
