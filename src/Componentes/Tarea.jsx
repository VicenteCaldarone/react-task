import React from 'react'

function Tarea() {
  return (
    <div className="accordion" id="accordionTarea2">
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingTarea2"><button className="accordion-button p-2 bg-alta collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsTarea2" aria-expanded="false" aria-controls="collapsTarea2">tas</button></h2>
        <div className="accordion-collapse collapse" aria-labelledby="headingTarea2" data-bs-parent="#accordionTarea2" id="collapsTarea2">
            <div className="accordion-body p-2">
                <div>
                    <textarea className="form-control comentario-tarea" placeholder="Comentarios..." id="comentarioTarea2"></textarea>
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