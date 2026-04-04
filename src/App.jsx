import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { UserProvider } from "./context/UserContext";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Service from "./pages/Services";
import Registration from "./pages/Registration";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <UserProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Service />} />
            <Route path="/registration" element={<Registration />} />

            <Route path="/admin" element={<Admin />} />

            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center text-2xl">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </UserProvider>
  );
}