import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useNavigate   } from 'react-router-dom';
import Login from '../login/Login';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    telefono: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica de registro del usuario
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }
    console.log('Registrando usuario:', formData);

    // Verificar si el correo electrónico ya está registrado
    const storedData = localStorage.getItem('userData');
    const userData = JSON.parse(storedData);
    if (storedData) {
      const existingUser = userData.find(user => user.email === formData.email);
      if (existingUser) {
        setErrorMessage('El correo electrónico ya está registrado. Por favor, utiliza otro.');
        return;
      }
    }
    // Guardar los datos en el almacenamiento local
    const newUser = { ...formData };
    const updatedData = storedData ? [...userData, newUser] : [newUser];
    localStorage.setItem('userData', JSON.stringify(updatedData));

    // Restablecer el formulario y el mensaje de error
    setFormData({ name: '', email: '', password: '' });
    setErrorMessage('');
    window.location.href = '/login';
    navigate('/login');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '25ch', display: 'block',backgroundColor: '#F0F0F0' },
        '& .MuiButton-root': { m: 1,alignItems:'center' },'& h2': { fontFamily: 'Arial', fontWeight: 'normal' },
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div style={{  borderRadius: '13px',padding: '10px', textAlign: 'center',marginBottom:'10px', backgroundColor: '#e2e2e2 ' }}>
        <h2>Registro</h2>
        <TextField
          id="outlined-Name"
          name="name"
          label="Name"
          type="Text"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-Email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
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
        <TextField
          id="outlined-number"
          name="telefono"
          label="Phone"
          type="Tel"
          value={formData.telefono}
          onChange={handleInputChange}
        />
        <Button type='submit' variant="contained">
        Send
      </Button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </Box>
    
  )
}

export default Register