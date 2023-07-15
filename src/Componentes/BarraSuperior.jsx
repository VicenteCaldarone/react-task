import React, {useState}  from 'react'

function BarraSuperior() {
    
    // hooks
    const [categoria, setCategoria] = useState("");
    const [tarea, setTarea] = useState("");
    const [prioridad, setPrioridad] = useState("-1");

    const [categorias, setCategorias] = useState([]);

    const addTarea = (e) =>{
        e.preventDefault();

        if(validarInputs()){
            
            if(!categorias[categoria]){
                categorias[categoria] = [];
            }
            categorias[categoria].push({
                categoria: categoria,
                tarea: tarea,
                prioridad: prioridad
            });

            console.log(categorias);
        }else{
        }
    }

    const validarInputs = () => {
        if(categoria.trim() === ''){
            alert('Debes escribir una Categoría');
            return false;
        }
    
        if(tarea.trim() === ''){
            alert('Debes escribir una Tarea');
            return false;
        }
    
        if(prioridad.trim() === '-1' ){
            alert('Debes seleccionar una Prioridad');
            return false;
        }
        return true;
    }



  return (
    <div className="bg-light bg-opacity-50 p-1 m-1 shadow-lg rounded">
        <form>
            <div className="row w-100">
                <div className="col-2">
                    <input type="text" className="form-control" list="categoriasOptions" id="categoria" placeholder="Categoría ..."
                        value={categoria} 
                        onChange={(e)=>setCategoria(e.target.value)}></input>
                    <datalist id="categoriasOptions"></datalist>                        
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" list="tareasOptions" id="tarea" placeholder="Tarea ..."
                         value={tarea} 
                         onChange={(e)=>setTarea(e.target.value)}></input>
                    <datalist id="tareasOptions"></datalist>                        
                </div>
                <div className="col-2">
                    <select className="form-select" id="prioridad"
                        value={prioridad} 
                        onChange={(e)=>setPrioridad(e.target.value)}>
                        <option value="-1" disabled>Prioridad</option>
                        <option value="0">Alta</option>
                        <option value="1">Media</option>
                        <option value="2">Baja</option>
                    </select>
                </div>
                <div className="col-2">
                    <button className="btn btn-light" id="btn-addTarea" onClick={addTarea}><i className="fa-sharp fa-solid fa-plus"></i></button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default BarraSuperior