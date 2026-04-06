import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { UserProvider } from "./context/UserContext";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Service = lazy(() => import("./pages/Services"));
const Registration = lazy(() => import("./pages/Registration"));
const Admin = lazy(() => import("./pages/Admin"));

export default function App() {
  return (
    <UserProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>

          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </UserProvider>
  );
}