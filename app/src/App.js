import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import '../src/css/tailwind.css';
import SacarCita from "./pages/sacarCita/SacarCita";
import CitasProgramadas from "./pages/citasProgramadas/CitasProgramadas";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/sacarcita" element={<SacarCita />}/>
          <Route path="/citasprogramadas" element={<CitasProgramadas />}/>

          {/* Aqui vas a colocar las rutas a las pagibas, llamas al componente que hace referencia */}
          {/* <Route path="/sugerencias" element={<Ruta2/>}/> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
