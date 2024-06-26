import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/formulario';
import MiOrg from './Componentes/MiOrg/MiOrg';
import { useState } from 'react';
import Equipo from './Componentes/Equipo/Equipo';
import Footer from './Componentes/Footer/Footer';
import {v4 as uuid} from"uuid"

function App() {


  //Ternario ---> condicion ? se muestra : no se muestra
  //condicion && se muestra
  const [mostrarFormulario,actualizarMostrar] = useState (false)
  const [equipos, actualizarEquipos]= useState( [
    { 
      id:uuid(),
      titulo:"Programación",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])


  const[colaboradores,actualizarColaboradores]= useState([{
   
      id:uuid(),
      equipo:"Front End",
      foto:"https://github.com/alan5412.png",
      nombre: "Alan Camarena",
      puesto:"Developer",
      fav:true
    },
    {
      id:uuid(),
      equipo:"Programación",
      foto:"https://github.com/alan5412.png",
      nombre: "Alan Camarena",
      puesto:"Developer",
      fav:false
    },
    {
      id:uuid(),
      equipo:"Devops",
      foto:"https://github.com/alan5412.png",
      nombre: "Alan Camarena",
      puesto:"Developer",
      fav:false
    },
    {
      id:uuid(),
      equipo:"Móvil",
      foto:"https://github.com/alan5412.png",
      nombre: "Alan Camarena",
      puesto:"Developer",
      fav:false
    },
    {
      id:uuid(),
      equipo:"Innovación y Gestión",
      foto:"https://github.com/alan5412.png",
      nombre: "Alan Camarena",
      puesto:"Developer",
      fav:false
    },
    {
      id:uuid(),
      equipo:"Front End",
      foto:"https://github.com/alan5412.png",
      nombre: "Alan Camarena",
      puesto:"Developer",
      fav:false
    }
  ])
  
  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Funcion para registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log('Nuevo Colaborador', colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, {...colaborador, id:uuid() } ])

  }
  //Funcion que elimina colaborador
  const eliminarColaborador = (id) =>{
    console.log('elimina colaborador',id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //actualizar color
  const actualizarColor = (color,id) =>{
    console.log('Actualiza Color ', color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario=color
      } return equipo
    })

    actualizarEquipos (equiposActualizados)

  }

  //Funcion para crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])
  }
 
  //funcion para dar like
  const like = (id) => {
    //console.log('like',id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo)=> equipo.titulo)} 
      registrarColaborador = {registrarColaborador}
      crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {equipos.map( (equipo)=> <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
      />)
      }

      <Footer/>  


    </div>
  );
}

export default App;
