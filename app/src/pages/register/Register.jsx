import React from 'react'
import "./register.css"
import NavBar from '../../components/navbar/NavBar'

function Register() {
  return (
    <>
      <form className="register" action="registro" method="post">
        <h2>Registro de Usuario</h2>

        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required placeholder="Ingrese su nombre" />

        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" required placeholder="Ingrese su correo electrónico" />
       
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required></input>
       
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required pattern="[0-9]{10}" />

        

        <input type="submit" value="Registrarse" />
      </form>
    </>
  )
}

export default Register