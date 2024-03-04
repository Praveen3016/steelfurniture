import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
// import Contextprovider from './context/Contextprovider'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import Usercontext from './context/usecontext'
function Layout() {

  const {setshow ,show ,img ,setimg , imgshow} = useContext(Usercontext)
  return (
    <>
    
      <>
      {
        show ? <div className="w-100 h-100 position-absolute bg-black bg-opacity-50 " style={{zIndex : "9999999"}} onClick={() => setshow(false)}>

        <div className="position-absolute bordered-3 bordered-opacity-50  " style={{top : "100px" , left : "350px"}}>
          <img src={img} alt="" height={500} className='rounded' />
        </div>
      </div> :
      ""
      }

      <Header />
      <Outlet />
      <Footer/>
      </>
      
    </>
  )
}

export default Layout