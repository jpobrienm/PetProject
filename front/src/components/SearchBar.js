import React, {useRef} from "react";


export const SearchBar= ()=>{
    const host_api = "http://localhost:8080/api"
    const searchRef = useRef(null);
    let results = []
    const searchList = () => {
        results = [];
        fetch(host_api + "/gifs")
        .then(response => response.json())
        .then((list) =>{
              results=list;
              results.map((item) =>{
                  console.log(item.id);
                  console.log(item.name);
                  console.log(item.file);
              })
          })
    }
    return(
    <div>
        <input className = "MySearch" 
                placeholder="Introduce lo que desees buscar" 
                ref={searchRef}
                onChange={searchList}></input>
        <table className='results'>
            <thead>
            <tr>
                <th>Archivo</th>
                <th>Nombre</th>
                <th>ID</th>
            </tr>
            </thead>
            <tbody>
            {results.map((item) => {
                return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.file}</td>
              </tr>
                })}
            </tbody>
        </table>
    </div>);
}