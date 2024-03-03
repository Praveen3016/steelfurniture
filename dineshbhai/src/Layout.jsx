import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Contextprovider from './context/Contextprovider'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Contextprovider>
      <Header />
      <Outlet />
      <Footer/>
      </Contextprovider>
    </>
  )
}

export default Layout