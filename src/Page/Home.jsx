import React from 'react'
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main';
import "./Home.css"

function Home() {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <Main />
      </div>

    </>
  )
}

export default Home