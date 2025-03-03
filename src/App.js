import './App.css';
import  Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import '../src/style-sheets/Boton.css'
import '../src/style-sheets/Pantalla.css'
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {

    setInput(input + val);

  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Ingresa valores para hacer calculos");
    }
  
  };

  return (
    <div className="App">
      <div className='titulo'>Calculadora-React</div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton> 
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton> 
          </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
      <footer className='pie-de-pag'>
        <p><h2>Irvan Bolaños-2024</h2></p>
      </footer>
    </div>
  );
}

export default App;
