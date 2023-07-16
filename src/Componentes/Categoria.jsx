import React, { useContext, useState } from 'react'
import Tarea from './Tarea'

import { CategoriasTareasContext } from "../App";


function Categoria(props) {
    // const [categoriasTareasContext, setCategoriasTareasContext] = useState(useContext(CategoriasTareasContext));
    // const [listaTareas, setListaTareas] = useState(props.listaTareas);   // https://bobbyhadz.com/blog/javascript-remove-object-from-array-by-value




    return (
    <div className="col-4 p-1">
        <div className="card bg-light bg-opacity-50">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.nombre}</h5>
                    <button type="button" className="btn-close" onClick={()=> props.onDelete(props.nombre)}></button>
                </div>
                {props.listaTareas.length > 0 ?
                    props.listaTareas.map((itemTarea)=>{
                        return <Tarea key={itemTarea.id} tarea={itemTarea}></Tarea>
                    }):
                    <></>
                }
                
            </div>
        </div>
    </div>
    )
}

export default Categoria