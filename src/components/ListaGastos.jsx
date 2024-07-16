import React, { useState } from 'react';

const ListaGastos = ({ gastos, eliminarGastos }) => {
  const [gastosSeleccionados, setGastosSeleccionados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('categoria'); // Por defecto buscar por categoría

  const manejarCambioCheckbox = (index) => {
    setGastosSeleccionados((prevSeleccionados) =>
      prevSeleccionados.includes(index)
        ? prevSeleccionados.filter((i) => i !== index)
        : [...prevSeleccionados, index]
    );
  };

  const manejarEliminarSeleccionados = () => {
    // Confirmar antes de eliminar
    if (window.confirm('¿Estás seguro de que deseas eliminar los gastos seleccionados?')) {
      eliminarGastos(gastosSeleccionados);
      setGastosSeleccionados([]); 
    }
  };

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const manejarFiltro = (e) => {
    setFiltro(e.target.value);
  };

  const filtrarGastos = () => {
    return gastos.filter((gasto) => {
      if (filtro === 'categoria') {
        return gasto.categoria.toLowerCase().includes(busqueda.toLowerCase());
      } else if (filtro === 'nombre') {
        return gasto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      } else if (filtro === 'fecha') {
        return gasto.fecha.toLowerCase().includes(busqueda.toLowerCase());
      } else {
        return true; 
      }
    });
  };

  return (
    <div className="card card-lista">
      <div className="card-header">
        <h5 className="card-title">Lista de Gastos 📝</h5>
      </div>
      <div className="card-body">
        <input
          type="text"
          className="form-control input-busqueda"
          placeholder="Buscar por categoría, nombre o fecha"
          value={busqueda}
          onChange={manejarBusqueda}
        />
        <select className="form-control mb-3" value={filtro} onChange={manejarFiltro}>
          <option value="categoria">Categoría</option>
          <option value="nombre">Nombre</option>
          <option value="fecha">Fecha</option>
        </select>
        <ul className="list-group">
          {filtrarGastos().map((gasto, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <span className="descripcion-gasto">{gasto.descripcion}</span><br />
                <span className="categoria-gasto">Categoría: {gasto.categoria}</span><br />
                <span className="monto-gasto">Monto: ${gasto.monto}</span><br />
                <span className="fecha-gasto">Fecha: {gasto.fecha}</span>
              </div>
              <input
                type="checkbox"
                checked={gastosSeleccionados.includes(index)}
                onChange={() => manejarCambioCheckbox(index)}
              />
            </li>
          ))}
        </ul>
        <button
          className="btn btn-danger mt-3"
          onClick={manejarEliminarSeleccionados}
        >
          Eliminar Seleccionados
        </button>
      </div>
    </div>
  );
};

export default ListaGastos;
