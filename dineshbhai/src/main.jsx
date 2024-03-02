import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Products from './component/Products.jsx'
import Layout from './Layout.jsx';
import Contect from './component/Contact.jsx';
import About from './component/About.jsx';
import Privacypolicy from './component/Privacypolicy.jsx';
import Catalouge from './component/Catalouge.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<App/>} />
      <Route path="product" element={<Products/>} />
      <Route path="contect" element={<Contect/>} />
      <Route path="about" element={<About/>} />
      <Route path="catalouge" element={<Catalouge/>} />
      <Route path="privacypolicy" element={<Privacypolicy/>} />
    </Route>
  )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
