import './MiOrg.css';
import { useState } from 'react';

const MiOrg = (props) =>{

    //Estado-hooks
    //useState
    //const [nombreVaribale,funcionActualiza] = useState(valorInical)

    // const [mostrar,actualizarMostrar]= useState(true);

    // const manejarClick = (props)=>{
    //     console.log('manejando click')
    // }


    return <section className="orgSection">
        <h3 className='title' >Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}


export default MiOrg;