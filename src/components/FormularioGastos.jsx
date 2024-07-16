import React, { useState } from 'react';

const FormularioGastos = ({ agregarGasto }) => {
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState(''); 

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Validar que todos los campos estén completos en el formulario
    if (descripcion && categoria && monto && fecha) {
      agregarGasto({ descripcion, categoria, monto, fecha });
      setDescripcion('');
      setCategoria('');
      setMonto('');
      setFecha('');
      setError(''); 
    } else {
      setError('Por favor, complete todos los campos.');
    }
  };

  return (
    <div className="card card-formulario">
      <div className="card-header">
        <h5 className="card-title">Agregar Gasto</h5>
      </div>
      <div className="card-body">
        <form onSubmit={manejarSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Ingrese la Descripción:</label>
            <input
              type="text"
              id="descripcion"
              className="form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">Ingrese la Categoría:</label>
            <input
              type="text"
              id="categoria"
              className="form-control"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="monto" className="form-label">Monto:</label>
            <input
              type="number"
              id="monto"
              className="form-control"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Fecha:</label>
            <input
              type="date"
              id="fecha"
              className="form-control"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Agregar Gasto</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioGastos;
