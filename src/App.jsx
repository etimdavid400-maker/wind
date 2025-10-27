import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './component/Navbar';
import About from './pages/About';
import Contact from './pages/contact';
import Footer from './component/Footer';
import Blog from './pages/Blog';
import Service from './pages/Services';
import ScrollToTop from './component/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add this here */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/services' element={<Service/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
