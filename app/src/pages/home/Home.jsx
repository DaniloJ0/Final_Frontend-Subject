import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Sidebar from '../../components/sidebar/Sidebar'
import ContentHome from '../../components/contentHome/ContentHome'

function Home() {
  return (
    <>
      <NavBar />
      <ContentHome />
      <Sidebar />
    </>
    
  )
}

export default Home