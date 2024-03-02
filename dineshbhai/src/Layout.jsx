import React from 'react'
import Header from './component/Header'
import Contextprovider from './context/Contextprovider'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Contextprovider>
      <Header />
      <Outlet />
      </Contextprovider>
    </>
  )
}

export default Layout