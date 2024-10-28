import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import LoginLayout from '../RegisterAndLogin/LoginLayout'

const GlobalLayout = () => {
  return (
    <div>
      <HeaderComponent/>
      <Outlet/>
      {/* <LoginLayout/> */}
    </div>
  )
}

export default GlobalLayout
