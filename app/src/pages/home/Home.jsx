import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import Register from '../register/Register'
import Login from '../login/Login'

function Home() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Register/>
      {/* <Login/> */}
    </>
    
  )
}

export default Home