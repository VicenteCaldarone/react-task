import './App.css';
import BarraSuperior from './Componentes/BarraSuperior';
import ContenedorTareas from './Componentes/ContenedorTareas';
import React from 'react';

export const CategoriasTareasContext = React.createContext();

function App() {

  return (
    <div className="App">
      <div className="container-flex">
        <BarraSuperior></BarraSuperior>
        <ContenedorTareas></ContenedorTareas>
      </div>
    </div>
  );
}

export default App;
