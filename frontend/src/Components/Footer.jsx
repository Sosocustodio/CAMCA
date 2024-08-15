// footer
import React from 'react';
import '../css/Sophia.css';
// import { FaSignOutAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-heading navegacao-heading">Navegação</h3>
        <ul className="footer-links">
          <li className='linksRodape'><a href="#">Home</a></li>
          <li className='linksRodape'><a href="#">Fazer pedido</a></li>
          <li className='linksRodape'><a href="#">Minha Conta</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading fale-conosco-heading">Fale conosco</h3>
        <p>Email: camcabrasil@faleconosco.com</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>CEP: 00000-000</p>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading links-rapidos-heading">Links Rápidos</h3>
        <ul className="footer-links">
          <li>Transparência e prestação de contas</li>
          <button className="special-button">
            <FaHeart color="red" size={20} /> Doe Agora
          </button>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;