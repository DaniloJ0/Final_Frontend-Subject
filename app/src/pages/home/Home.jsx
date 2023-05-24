import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import Register from '../register/Register'

function Home() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Register/>
      <div>Welcome Home</div>
    </>
    
  )
}

export default Home