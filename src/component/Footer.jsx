import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6 md:px-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Occupational Therapy Association of Nigeria (OTAN)
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Promoting excellence, collaboration, and innovation in occupational therapy across Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/membership" className="hover:text-white transition">Membership</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog" className="hover:text-white transition">Events</a></li>
            <li><a href="/blog" className="hover:text-white transition">News & Updates</a></li>
            <li><a href="/blog" className="hover:text-white transition">Career Opportunities</a></li>
            <li><a href="/" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm mb-3">
            Email: <a href="mailto:info@otan.org.ng" className="hover:text-white">info@otan.org.ng</a>
          </p>
          <p className="text-sm mb-5">Phone: +234 801 234 5678</p>

          {/* Social Links */}
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-b border-gray-700 pb-6">
        <p>© {new Date().getFullYear()} OTAN. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="/" className="hover:text-white transition">Privacy Policy</a>
          <a href="/" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>

      {/* Developer Section */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>
          Developed & Maintained by{" "}
          <span className="text-white font-semibold">TIM TECHNOLOGIES.CO</span>
        </p>
        <div className="mt-3 md:mt-0">
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            timtech.co
          </a>{" "}
          |{" "}
          <a href="tel:+2347079752017" className="hover:text-white transition">
            +234 707 975 2017
          </a>
        </div>
      </div>
    </footer>
  );
}
