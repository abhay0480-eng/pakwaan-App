import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <div>
      <HeaderComponent/>
      <Outlet/>
    </div>
  )
}

export default GlobalLayout
