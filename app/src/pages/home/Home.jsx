import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

function Home() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div>Welcome Home</div>
    </>
  )
}

export default Home