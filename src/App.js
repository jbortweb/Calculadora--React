import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import imageLogo from './image/freecodecamp-logo.png';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    if(input){
    setInput(evaluate(input))
    }
  };

  return (
    <div className="App">
      <div className='container-logo'>
        <img
        src={imageLogo}
        className='logo'
        alt='Logo de freeCodeCamp'
         />
      </div>
      <div className='container-calculadora'>
        <Pantalla
        input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput} operador={true} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput} operador={true} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput} operador={true} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput} operador={true} >/</Boton>          
        </div>
        <div className='fila'>
          <BotonClear 
            manejarClear={()=> setInput('')}>
            Limpiar
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
