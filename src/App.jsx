// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Blog from "./pages/Blog";
import Service from "./pages/Services";
import ScrollToTop from "./component/ScrollToTop";

import Admin from "./pages/Admin";
import Registration from "./pages/Registration";
import Messages from "./pages/Messages";
import BlogAdmin from "./pages/BlogAdmin";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Service />} />
          <Route path="/registration" element={<Registration />} />

          {/* Admin Panel */}
          <Route path="/admin" element={<Admin />} />
          {/* Removed /admin/blogs separate route since BlogAdmin is now a tab */}

          {/* Catch all unknown routes */}
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
    </UserProvider>
  );
}
