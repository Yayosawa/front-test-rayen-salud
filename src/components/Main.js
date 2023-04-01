import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Administracion from "../views/Administracion";
import Inicio from "../views/Inicio";
import Login from "./Login";
import Registro from "./Registro";

const Main = () => {

  const getSession = () => {
    const session = JSON.parse(sessionStorage.getItem('session'))
    console.log("REVISO SESSION=>", session)
    return session || {isLogged: false}
  }

  return (
    <Router>
      {
        getSession().isLogged ?
          <Routes>
            {/* <Route exact path="/" element={<Inicio/>}/> */}
            <Route exact path="/explore" element={<Inicio/>}/>
            <Route exact path="/administracion" element={<Administracion/>}/>
            <Route path="/" element={<Navigate replace to="/explore"/>}/>
            <Route path="*" element={<Navigate replace to="/explore"/>}/>
          </Routes>
        :
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/registro" element={<Registro/>}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
      }
    </Router>
  )
}

export default Main;