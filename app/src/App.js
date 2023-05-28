import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import './App.css';
import '../src/css/output.css';
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage />}/>

          {/* Aqui vas a colocar las rutas a las pagibas, llamas al componente que hace referencia */}
          {/* <Route path="/sugerencias" element={<Ruta2/>}/> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
