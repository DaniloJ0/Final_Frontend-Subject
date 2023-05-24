import React from 'react'
import "./login.css"

function Login() {
  return (
    <>
      <form className="login" action="Login" method="post">
        <h2>Login de Usuario</h2>

        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" required placeholder="Ingrese su correo electrónico" />
       
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required></input>
       
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login