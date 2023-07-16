import React, {useContext, useEffect, useState} from 'react'
import Categoria from './Categoria'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { CategoriasTareasContext } from "../App";

const RSwal = withReactContent(Swal);

function ContenedorTareas() {

    // const categoriasTareasContext = useContext(CategoriasTareasContext);
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

    const eliminarCategoria = (categoriaNombre) => {
        RSwal.fire({
            text: `Queres eliminar la Categoría "${categoriaNombre}" y todas sus Tareas?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            // delete categoriasTareasContext[categoriaNombre];
            
            let categoriasTareasAux = [];
            for(const key in categoriasTareas){
                if(key != categoriaNombre){
                    categoriasTareasAux[key] = categoriasTareas[key];
                }
            }
            setCategoriasTareas(categoriasTareasAux);
            
            if (result.isConfirmed) {
              RSwal.fire(
                'Eliminado!',
                'La categoría fué eliminada correctamente.',
                'success'
              )
            }
          })
    };


  return (
    <div className="px-3">
        <div className="row" id="cardContainer">

        {Object.entries(categoriasTareas).length > 0 ? 
            Object.entries(categoriasTareas).map(([categoria, tareas])=>{
                return<Categoria key={categoria} nombre={categoria} listaTareas={tareas} onDelete={eliminarCategoria}></Categoria>
            }):
            (<></>)
        }
           
        </div>        
    </div>
  )
}

export default ContenedorTareas