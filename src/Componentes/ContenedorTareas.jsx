import React, {useContext} from 'react'
import Categoria from './Categoria'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CategoriasTareasContext } from "../App";

const RSwal = withReactContent(Swal);

function ContenedorTareas() {
    const { categoriasTareas, setCategoriasTareas } = useContext(CategoriasTareasContext);

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
            if (result.isConfirmed) {
              //-- 
              let categoriasTareasAux = [];
              for(const key in categoriasTareas){
                  if(key !== categoriaNombre){
                      categoriasTareasAux[key] = categoriasTareas[key];
                  }
              }
              setCategoriasTareas(categoriasTareasAux);
              //--
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