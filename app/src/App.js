import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />

          {/* Aqui vas a colocar las rutas a las pagibas, llamas al componente que hace referencia */}
          
          {/* <Route path="/informacion" element={<InfoPage/>}/> */}
          {/* <Route path="/sugerencias" element={<Ruta2/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
