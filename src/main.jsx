import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import AboutUs from './components/About/Aboutus.jsx'
import Services from './components/Services/Services.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import {slides} from "./data/SliderData"
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Partners from './components/Partners/Partners.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>  
    <Route path="" element={<Home data={slides}/>}/>
    <Route path="about" element={<AboutUs/>}/>
    <Route path="services" element={<Services/>}/>
    <Route path="portfolio" element={<Portfolio/>}/>
    <Route path="partners" element={<Partners/>}/>
    <Route path="contactus" element={<ContactUs/>}/>
  </Route>  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
