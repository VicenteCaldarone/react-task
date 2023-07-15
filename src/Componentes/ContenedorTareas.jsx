import React, {useContext} from 'react'
import Categoria from './Categoria'
import Tarea from './Tarea'

import { CategoriasTareasContext } from "../App";

function ContenedorTareas() {
    const categoriasTareasContext = useContext(CategoriasTareasContext);
    console.log('ContenedorTareas ' + Object.keys(categoriasTareasContext).length);
    console.log(categoriasTareasContext);

/*     if( Object.entries(categoriasTareasContext).length > 0){

        Object.entries(categoriasTareasContext).map(([categoria, tareas])=>{
            console.log(categoria);
            console.log(tareas);
        })
     } */


  return (
    <div className="px-3">
        <div className="row" id="cardContainer">

        {Object.entries(categoriasTareasContext).length > 0 ? 
            Object.entries(categoriasTareasContext).map(([categoria, tareas])=>{
                return(
                <Categoria key={categoria} nombre={categoria}>

                </Categoria>)
            }):
            (<></>)
        }
           
        </div>        
    </div>
  )
}

export default ContenedorTareas