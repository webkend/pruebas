import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <div className="suite__main container-flex">

      <Sidebar />

      <div className="main-container container-flex">
        <Navbar />
        <h1>Suite</h1>
      </div>

    </div>
  )
}

export default Admin;
