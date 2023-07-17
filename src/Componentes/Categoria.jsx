import React, { useState } from 'react'
import Tarea from './Tarea'

function Categoria(props) {
    const [listaTareas, setListaTareas] = useState(props.listaTareas);

    const value = {listaTareas, setListaTareas};

    return (
    <div className="col-4 p-1">
        <div className="card bg-light bg-opacity-50">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.nombre}</h5>
                    <button type="button" className="btn-close" onClick={()=> props.onDelete(props.nombre)} data-toggle="tooltip" title="Eliminar categoría"></button>
                </div>
                {listaTareas.length > 0 ?
                    listaTareas.map((itemTarea)=>{
                        return <Tarea key={itemTarea.id} tarea={itemTarea} actualizacion={value}></Tarea>
                    }):
                    <></>
                }
                
            </div>
        </div>
    </div>
    )
}

export default Categoria