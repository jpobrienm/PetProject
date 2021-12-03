import React from "react";

const SideMenu = () =>{

    return(
    <div>
        <input className = "MyInput" placeholder="Nombre del archivo"></input>
        <button className="saveButton">Guardar Archivo</button>
        <input className = "MyInput" placeholder="Ubicacion del Repositorio" disabled={true}></input>
        <button className="saveButton">Buscar Repositorio</button>
        <input className = "MyInput" placeholder="Etiquetas"></input>
        <button className="saveButton">Añadir Etiquetas</button>
    </div>);
}

export default SideMenu