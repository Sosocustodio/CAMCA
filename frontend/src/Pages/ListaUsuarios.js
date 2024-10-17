//Lista de Usuarios
import React from "react";
import ControleSaidas from "../Components/ControleSaidas";
import bannercu from '../imagens/bannercu.png';

const ListaUsuarios = () => {

  const backgroundStyle = {
    backgroundImage: `url(${bannercu})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '99%',
    height: '100vh'
  };

  return (
    <>
     <div style={backgroundStyle}>
      <ControleSaidas />
      </div>
    </>
  );
};

export default ListaUsuarios;
