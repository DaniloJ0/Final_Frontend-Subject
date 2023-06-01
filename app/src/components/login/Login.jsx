import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar campos vacíos
    if (!formData.email || !formData.password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }
    // Obtener datos de registro almacenados en el localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);

      // Buscar el usuario con el correo electrónico proporcionado
      const user = userData.find((user) => user.email === formData.email);

      if (user && user.password === formData.password) {
        // Credenciales válidas, redireccionar al usuario a la página de inicio
        navigate("/");
      } else {
        // Credenciales inválidas, mostrar mensaje de error
        setErrorMessage(
          "Credenciales incorrectas. Por favor, intenta nuevamente."
        );
      }
    } else {
      // No hay datos de registro almacenados
      setErrorMessage(
        "No existen registros de usuarios. Por favor, regístrate primero."
      );
    }
  };

  return (
    <div className="h-screen mt-10">
      <Box component="form" onSubmit={handleSubmit}
        noValidate
        autoComplete="off">
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-5 text-center">Ingresa</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative"><div className="flex justify-center">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1" type="submit">Ingresar</button>
                  </div>
                </div>
              </div>{errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    
      </Box>
    </div>
  );
}

export default Login;
