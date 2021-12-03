import logo from "./logo.png"
import { useBaseContext } from "./ContextProvider";

function Header() {
  const {state, dispatch} = useBaseContext()
  const gotoCreateWindow = () =>{
    dispatch({type: 'create-window'})
  }
  const gotoSearchWindow = () =>{
    dispatch({type: 'search-window'})
  }
  return (
    <header className="Header">
      <div>
          <a href="http://localhost:3000/">
              <img src={logo} className="HeaderLogo" alt="logo" ></img>
          </a>
          <a className="MyTitle">Make My Own Video!!!</a>
          <div className="topnav">
            <a onClick={gotoCreateWindow}>Crear Video</a>
            <a onClick={gotoSearchWindow}>Buscar Videos</a>
          </div>
      </div>
    </header>
    );
  } 

  export default Header;