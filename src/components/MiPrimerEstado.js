import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    /*
    //Problemática
    let nombre= "Luisma"
    const cambiarNombre= e =>{
        nombre="paquito"
    }*/
    const [nombre, setNombre] = useState("Luisma")
    const cambiarNombre = (e, nombreFijo) =>{
        setNombre(nombreFijo)
    }
    return (
    <div>
        <h3>Componente: Mi Primer Estado</h3>
        <strong>{nombre}</strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e, "paquito")}>cambiar nombre por paquito</button>
        <input type='text' onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'></input>
    </div>
    )
}
