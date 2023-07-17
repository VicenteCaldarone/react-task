import React, {useContext, useState}  from 'react'
import { CategoriasTareasContext } from "../App";   // Context
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const RSwal = withReactContent(Swal);

/**
 * funcion generadora de identificadores: 
 * @returns valor unico de tipo string
 */
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function BarraSuperior() {
    const { categoriasTareas, setCategoriasTareas } = useContext(CategoriasTareasContext);

    const [categoriasOptions, setCategoriasOptions] = useState([]);
    const [tareasOptions, setTareasOptions] = useState([]);

    const [categoria, setCategoria] = useState("");
    const [tarea, setTarea] = useState("");
    const [prioridad, setPrioridad] = useState("-1");

    const agregarTarea = (e) =>{
        e.preventDefault();

        if(validarInputs()){
            //-- creo una copia del array de categoriasTareas
            let categoriasTareasClone = [];
            for(const [k, v] of Object.entries(categoriasTareas)){
                categoriasTareasClone[k] = v;
            }
            //-- trabajo sobre la copia
            if(!categoriasTareasClone[categoria]){
                categoriasTareasClone[categoria] = [];
            }
            categoriasTareasClone[categoria].push({
                id: generateUUID(),
                categoria: categoria,
                nombre: tarea,
                prioridad: prioridad,                
                descripcion: '',
                finalizada: false
            });
            //-- actualizo el array con la copia
            setCategoriasTareas(categoriasTareasClone);
            //-- actualizo sugerencias de categorias
            if(!categoriasOptions.includes(categoria)){
                setCategoriasOptions(prevState => [...prevState, categoria]);
            }
            //-- actualizo sugerencias de tareas
            if(!tareasOptions.includes(tarea)){
                setTareasOptions(prevState => [...prevState, tarea]);
            }
            //-- limpio imputs
            limpiarInputs();
        }else{
        }
    }

    const validarInputs = () => {
        if(categoria.trim() === ''){
            RSwal.fire({
                icon: 'error',
                text: 'Debes escribir una Categoría',
              })            
            return false;
        }
    
        if(tarea.trim() === ''){
            RSwal.fire({
                icon: 'error',
                text: 'Debes escribir una Tarea',
              })            
            return false;
        }
    
        if(prioridad.trim() === '-1' ){
            RSwal.fire({
                icon: 'error',
                text: 'Debes seleccionar una Prioridad',
              })            
            return false;
        }
        return true;
    }

    const limpiarInputs = () => {
        setCategoria("");
        setTarea("");
        setPrioridad("-1");
    }

  return (
    <div className="bg-light bg-opacity-50 p-1 m-1 shadow-lg rounded">
        <form>
            <div className="row w-100">
                <div className="col-2">
                    <input type="text" className="form-control" list="categoriasOptions" id="categoria" placeholder="Categoría ..." autocomplete="off"
                        value={categoria} 
                        onChange={(e)=>setCategoria(e.target.value)}></input>
                    <datalist id="categoriasOptions">
                        {categoriasOptions.length > 0 ?
                            categoriasOptions.map((option, index)=>{
                                return <option key={index} value={option}></option>
                            })
                            :<></>
                        }
                    </datalist>
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" list="tareasOptions" id="tarea" placeholder="Tarea ..." autocomplete="off"
                         value={tarea} 
                         onChange={(e)=>setTarea(e.target.value)}></input>
                    <datalist id="tareasOptions">
                    {tareasOptions.length > 0 ?
                            tareasOptions.map((option, index)=>{
                                return <option key={index} value={option}></option>
                            })
                            :<></>
                        }
                    </datalist>
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
                    <button className="btn btn-light" id="btn-addTarea" onClick={agregarTarea}><i className="fa-sharp fa-solid fa-plus"></i></button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default BarraSuperior