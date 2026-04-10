import React from 'react'
import Navbar from '../component/shared/navbar/Navbar'
import { Outlet } from 'react-router'

const Mainlayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
      {/* <h2>Main layout</h2> */}
    </div>
  )
}

export default Mainlayout
