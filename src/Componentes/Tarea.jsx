import React, { useState } from 'react'
import './Tarea.css'

function Tarea(props) {
    const classPrioridades = ['bg-alta', 'bg-media', 'bg-baja'];

    const [nombre, setNombre] = useState(props.tarea.nombre);
    const [descripcion, setDescripcion] = useState(props.tarea.descripcion);

    
  return (
    <div className="accordion" id={`accordionTarea${props.tarea.id}`}>
        <div className="accordion-item">
        <h2 className="accordion-header" id={`headingTarea${props.tarea.id}`}>
            <button className={`accordion-button p-2 collapsed ${classPrioridades[props.tarea.prioridad]}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapsTarea${props.tarea.id}`} aria-expanded="false" aria-controls={`collapsTarea${props.tarea.id}`}>
                {nombre}
            </button>
        </h2>
        <div className="accordion-collapse collapse" aria-labelledby={`headingTarea${props.tarea.id}`} data-bs-parent={`#accordionTarea${props.tarea.id}`} id={`collapsTarea${props.tarea.id}`}>
            <div className="accordion-body p-2">
                <div>
                    <textarea className="form-control comentario-tarea" placeholder="Comentarios..." id="comentarioTarea2" 
                        value={descripcion}
                        onChange={(e)=>setDescripcion(e.target.value)}>
                    </textarea>
                </div>  
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-success btn-sm m-2" type="button"><i className="fa-solid fa-check"></i></button>
                <button className="btn btn-outline-danger btn-sm m-2" type="button"><i className="fa-solid fa-x"></i></button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Tarea