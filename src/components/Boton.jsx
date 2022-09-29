import React from 'react';
import '../stylesheet/Boton.css';

const Boton = (props) => {
    
  return (
    <div
      className= { props.operador ? 'container-boton operador' : 'container-boton' }    
      onClick={() => props.manejarClic(props.children)}>
          {props.children}
      </div>
  )
}

export default Boton