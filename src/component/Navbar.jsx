import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Logo from "../assets/logo-removebg-preview.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICE", link: "/services" },
    { name: "BLOG'S", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
  ];

  // ✅ Admin access logic
  if (user) {
    Links.push({ name: "ADMIN PANEL", link: "/admin" });
  }

  const handleClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Logo */}
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"
          onClick={() => handleClick("/")}
        >
          <img
            src={Logo}
            alt="OTAN Logo"
            className="w-16 h-16 mr-2 object-contain"
          />
          <span className="text-2xl font-semibold">OTAN</span>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <button
                onClick={() => handleClick(link.link)}
                className={`text-gray-800 hover:text-gray-400 duration-500 ${
                  location.pathname === link.link
                    ? "text-green-600 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
