import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

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
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": {
          m: 1,
          width: "25ch",
          display: "block",
          backgroundColor: "#F0F0F0",
        },
        "& .MuiButton-root": { m: 1, alignItems: "center" },
        "& h2": { fontFamily: "Arial", fontWeight: "normal" },
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          borderRadius: "13px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#e2e2e2 ",
        }}
      >
        <h2>Login</h2>
        <TextField
          id="outlined-required"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          label="Email"
          type="email"
        />
        <TextField
          id="outlined-password-input"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      {errorMessage && <p sx={{color: "red"}}>{errorMessage}</p>}
    </Box>
  );
}

export default Login;
