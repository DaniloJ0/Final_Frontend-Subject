import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Register from '../register/Register'
import Login from '../login/Login'
import RatingPage from '../RatingPage/RatingPage'

function Home() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Register/>
      <Login/>
      <RatingPage />
    </>
    
  )
}

export default Home