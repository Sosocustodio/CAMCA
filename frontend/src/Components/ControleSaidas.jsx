import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/controleSaida.css';
import TabelaCadastro from "../Components/TabelaCadastro";



function Example() {
  const [show, setShow] = useState(false);


  return (
    <>
      <div class="buttons">
        <Button variant="primary" onClick={() => setShow(true)} className='tabelabotao'>
          Tabela
        </Button>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton >
          <Modal.Title id="example-custom-modal-styling-title">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <TabelaCadastro />
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;

