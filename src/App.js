import logo from './logo.svg';
import './App.css';
import BarraSuperior from './Componentes/BarraSuperior';
import ContenedorTareas from './Componentes/ContenedorTareas';
import React, { useEffect, useState } from 'react';

export const CategoriasTareasContext = React.createContext();

function App() {
  const [categoriasTareas, setCategoriasTareas] = useState([]);

  useEffect(() => {
    let categoriasTareasTest = [];

    categoriasTareasTest['Categoria01'] = [{
      categoria: 'Categoria01',
      tarea: 'tarea01',
      prioridad: 1
    }];
    
    categoriasTareasTest['Categoria02'] = [{
      categoria: 'Categoria02',
      tarea: 'tarea02',
      prioridad: 2
    }];   // lista de tareas
    
    setCategoriasTareas(categoriasTareasTest);  
  }, []);



  return (
    <div className="App">
      <div className="container-flex">
      <CategoriasTareasContext.Provider value={categoriasTareas}>
        <BarraSuperior></BarraSuperior>
        <ContenedorTareas></ContenedorTareas>
      </CategoriasTareasContext.Provider>
      </div>
    </div>
  );
}

export default App;
