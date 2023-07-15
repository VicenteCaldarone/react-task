import React from 'react'
import Tarea from './Tarea'

function Categoria(props) {
    const btnCloseClick =  (e) => {
        alert(`Queres eliminar la Categoría "${props.nombre}" y todas sus Tareas?`);
/*         modalConfirm(`Queres eliminar la Categoría "${categoriaNombre}" y todas sus Tareas?`, ()=>{
            cardContainer.removeChild(cardCol);
        });
 */    };


    return (
    <div className="col-4 p-1">
        <div className="card bg-light bg-opacity-50">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.nombre}</h5>
                    <button type="button" className="btn-close" onClick={btnCloseClick}></button>
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