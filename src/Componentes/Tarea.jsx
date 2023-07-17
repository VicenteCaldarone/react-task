import React, { useState } from 'react'
import './Tarea.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const RSwal = withReactContent(Swal);

function Tarea(props) {
    const classPrioridades = ['bg-alta', 'bg-media', 'bg-baja'];
    const classFinalizada = 'text-decoration-line-through';

    const [id] = useState(props.tarea.id);
    const [nombre] = useState(props.tarea.nombre);
    const [descripcion, setDescripcion] = useState(props.tarea.descripcion);
    const [finalizada, setFinalizada] = useState(props.tarea.finalizada);

    const {listaTareas, setListaTareas} = props.actualizacion;

    const finalizarTarea = (e) => {
        e.preventDefault();
        setFinalizada(!finalizada);
        document.getElementById(id).click();       
    }

    const reactivarTarea = (e) => {
        e.preventDefault();
        setFinalizada(!finalizada);
    }
    
    const eliminarTarea = (e) => {
        e.preventDefault();

        RSwal.fire({
            text: `Queres eliminar la Tarea "${nombre}" ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                //-- 
                setListaTareas(listaTareas.filter(item => item.id !== id));
                //--
                RSwal.fire(
                    'Eliminado!',
                    'La Tarea fué eliminada correctamente.',
                    'success'
                )
            }
          })
    }
    
  return (
    <div className={`accordion ${finalizada?classFinalizada:''}`} id={`accordionTarea${id}`}>
        <div className="accordion-item">
        <h2 className="accordion-header" id={`headingTarea${id}`}>
            <button className={`accordion-button p-2 collapsed ${classPrioridades[props.tarea.prioridad]}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapsTarea${id}`} aria-expanded="false" aria-controls={`collapsTarea${id}`} id={id}>
                {nombre}
            </button>
        </h2>
        <div className={`accordion-collapse collapse ${classPrioridades[props.tarea.prioridad]}`} aria-labelledby={`headingTarea${id}`} data-bs-parent={`#accordionTarea${id}`} id={`collapsTarea${id}`}>
            <div className="accordion-body p-2">
                <div>
                    <textarea className="form-control comentario-tarea" placeholder="Comentarios..." id="comentarioTarea2" 
                        value={descripcion}
                        onChange={(e)=>setDescripcion(e.target.value)}>
                    </textarea>
                </div>  
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-primary btn-sm m-2" type="button" onClick={reactivarTarea} disabled={!finalizada} data-toggle="tooltip" title="Reactivar tarea"><i class="fa-solid fa-arrow-rotate-left"></i></button>
                <button className="btn btn-outline-success btn-sm m-2" type="button" onClick={finalizarTarea} disabled={finalizada} data-toggle="tooltip" title="Finalizar tarea"><i className="fa-solid fa-check"></i></button>
                <button className="btn btn-outline-danger btn-sm m-2" type="button" onClick={eliminarTarea} data-toggle="tooltip" title="Eliminar tarea"><i className="fa-solid fa-x"></i></button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Tarea