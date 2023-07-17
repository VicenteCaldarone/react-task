import './App.css';
import BarraSuperior from './Componentes/BarraSuperior';
import ContenedorTareas from './Componentes/ContenedorTareas';
import React, { useState } from 'react';

// https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
export const CategoriasTareasContext = React.createContext({
  categoriasTareas: [],
  setCategoriasTareas: () => {}
});

function App() {
  const [categoriasTareas, setCategoriasTareas] = useState([]);
  // uso esta forma para que BarraSuperior y ContenedorTareas puedan interactuar
  const value = {categoriasTareas, setCategoriasTareas};

  return (
    <div className="App">
      <div className="container-flex">
      <CategoriasTareasContext.Provider value={value}>
        <BarraSuperior></BarraSuperior>
        <ContenedorTareas></ContenedorTareas>
      </CategoriasTareasContext.Provider>
      </div>
    </div>
  );
}

export default App;
