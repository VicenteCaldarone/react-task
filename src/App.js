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
      id: 1,
      categoria: 'Categoria01',
      nombre: 'tarea01',
      descripcion: 'descripicón Tarea 01',
      prioridad: 1
    },{
      id: 3,
      categoria: 'Categoria01',
      nombre: 'tarea03',
      descripcion: 'descripicón Tarea 03',
      prioridad: 0
    }];

    categoriasTareasTest['Categoria02'] = [{
      id: 2,
      categoria: 'Categoria02',
      nombre: 'tarea02',
      descripcion: 'descripicón Tarea 02',
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
