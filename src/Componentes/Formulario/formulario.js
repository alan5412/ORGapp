
import { useState } from "react";
import "./formulario.css"
import Campo from "../CampoTexto/CampoTexto";
import ListaOpciones from "../listaOpciones/listaOpciones";
import Boton from "../listaOpciones/Boton/Boton";



const Formulario = (props) => {

    const [nombre,actualizarNombre]= useState("")
    const [puesto,actualizarPuesto]= useState("")
    const [foto,actualizarFoto]= useState("")
    const [equipo,actualizarEquipo] = useState("")
    const [titulo,actualizarTitulo]= useState("")
    const [color,actualizarColor]= useState("")

    const {registrarColaborador, crearEquipo}= props;

    const manejarEnvio = (event)=>{
        event.preventDefault()
        console.log('manejandoEnvio')
        let datosEnviar = {
            nombre : nombre ,
            puesto : puesto ,
            foto : foto,
            equipo:equipo
        }
        registrarColaborador(datosEnviar)

    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
             title="Nombre"
             placeholder="Ingrese nombre" 
             required
             valor = {nombre}
             actualizarValor={actualizarNombre}
             />
            <Campo 
                title="Puesto" 
                placeholder="Ingrese puesto" 
                required
                valor = {puesto}
                actualizarValor={actualizarPuesto}    
                />
            <Campo
                title="Foto"   
                placeholder="Ingrese enlace de foto" 
                required 
                valor = {foto}
                actualizarValor={actualizarFoto}
                />

            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos = {props.equipos}
                />
                
            <Boton nombre="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un equipo.</h2>
            <Campo 
             title="Titulo"
             placeholder="Ingrese Titulo" 
             required
             valor = {titulo}
             actualizarValor={actualizarTitulo}
             />
            <Campo 
                title="Color" 
                placeholder="Ingrear el color en Hexadecimal" 
                required
                valor = {color}
                actualizarValor={actualizarColor} 
                type = "color"   
            />
            <Boton nombre="Registar equipo"/>

      </form>

    </section>
}

export default Formulario;