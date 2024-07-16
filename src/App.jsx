import React, { useState, useEffect } from 'react';
import FormularioGastos from './components/FormularioGastos';
import ListaGastos from './components/ListaGastos';
import './App.css';

const App = () => {
  // Cargar los gastos desde localStorage 
  const [gastos, setGastos] = useState(() => {
    const savedGastos = localStorage.getItem('gastos');
    return savedGastos ? JSON.parse(savedGastos) : [];
  });

  useEffect(() => {
    //Guardar los gastos en localStorage cada que vez se actualicen
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  const agregarGasto = (nuevoGasto) => {
    setGastos([...gastos, nuevoGasto]);
  };

  const eliminarGastos = (indices) => {
    setGastos(gastos.filter((_, index) => !indices.includes(index)));
  };

  return (
    <div className="container">
      <h1 className="titulo-principal">Seguimiento de Gastos 💵</h1>
      <div className="row">
        <div className="col-md-6">
          <FormularioGastos agregarGasto={agregarGasto} />
        </div>
        <div className="col-md-6">
          <ListaGastos gastos={gastos} eliminarGastos={eliminarGastos} />
        </div>
      </div>
    </div>
  );
};

export default App;
