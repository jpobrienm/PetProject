import React, {useState, setState, useEffect} from "react";


const EditorMenu = () => {
    const [red, setRed] = useState(() => {return 0});
    const [green, setGreen] = useState(() => {return 0});
    const [blue, setBlue] = useState(() => {return 0});

    const handleOnChangeRed = (event) =>{
        setRed(event.target.value);
    }

    const handleOnChangeGreen = (event) =>{
        setGreen(event.target.value);
    }

    const handleOnChangeBlue = (event) =>{
        setBlue(event.target.value);
    }

    return(
        <div>
            <input type="range" min={0} max={255} value={red} className="slider" onChange={handleOnChangeRed}></input>
            <div>Rojo: {red}</div>
            <input type="range" min={0} max={255} value={green} className="slider" onChange={handleOnChangeGreen}></input>
            <div>Verde: {green}</div>
            <input type="range" min={0} max={255} value={blue} className="slider" onChange={handleOnChangeBlue}></input>
            <div>Azul: {blue}</div>
        </div>
    );
}


export default EditorMenu;