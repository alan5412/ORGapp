import "./Campo.css"
import { useState } from "react"


const Campo = (props) =>{
    const placeholderModificador= `${props.placeholder}...`
    
    //destructuracion
    const {type = "text"}=props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`} >
        <label>{props.title}</label>
        <input 
            placeholder={placeholderModificador} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type = {type}
        
        />
    </div>
}

export default Campo