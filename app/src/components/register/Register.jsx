import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    telefono: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica de registro del usuario
    console.log(formData);
    if (!formData.name || !formData.email || !formData.password || !formData.telefono) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }
    console.log("Registrando usuario:", formData);

    // Verificar si el correo electrónico ya está registrado
    const storedData = localStorage.getItem("userData");
    const userData = JSON.parse(storedData);
    if (storedData) {
      const existingUser = userData.find(
        (user) => user.email === formData.email
      );
      if (existingUser) {
        setErrorMessage(
          "El correo electrónico ya está registrado. Por favor, utiliza otro."
        );
        return;
      }
    }
    // Guardar los datos en el almacenamiento local
    const newUser = { ...formData };
    const updatedData = storedData ? [...userData, newUser] : [newUser];
    localStorage.setItem("userData", JSON.stringify(updatedData));

    // Restablecer el formulario y el mensaje de error
    setFormData({ name: "", email: "", password: "" });
    setErrorMessage("");
    window.location.href = "/login";
    navigate("/login");
  };

  return (
    <div className="h-screen mt-10">
      <Box component="form" onSubmit={handleSubmit}
        noValidate
        autoComplete="off">
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-5 text-center">Registrate</h1>
            </div>
            <div className="divide-y divide-gray-200">
            <div className="relative">
                  <input
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
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
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="phone"
                    name="telefono"
                    type="Tel"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Telefono"
                  />
                  <label
                    htmlFor="tel"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Phone
                  </label>
                </div>
                <div className="relative"><div className="flex justify-center">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1" type="submit">Crear Cuenta</button>
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

export default Register;
