import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Products from './component/Products.jsx';
import Layout from './Layout.jsx';
import Contact from './component/Contact.jsx'; 
import About from './component/About.jsx';
import Privacypolicy from './component/Privacypolicy.jsx';
import Contextprovider from './context/Contextprovider.jsx';
import Productdetails from './component/Productdetails.jsx'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} /> {/* Changed from "path" to "index" */}
      <Route path="product" element={<Products/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="about" element={<About />} />
      <Route path="privacypolicy" element={<Privacypolicy />} />
      <Route path="productdetails/:photoId" element={<Productdetails />} /> {/* Adjusted the path */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextprovider>
      <RouterProvider router={router} />
    </Contextprovider>
  </React.StrictMode>
);
