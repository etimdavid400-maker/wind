import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Precious from "../assets/precious.jpg";
import Ayeni from "../assets/ayeni.jpeg";
import Dunsi from "../assets/dusi-genSec.JPG";
import Peter from "../assets/peter-pro.jpg";
import Button from "../component/Button";
import { Link } from "react-router-dom";

import AboutHero from "../component/about/AboutHero";
import OurStory from "../component/about/OurStory";
import WhatWeDo from "../component/about/WhatWeDo";
import WhyOT from "../component/about/WhyOT";
import Leadership from "../component/about/Leadership";


export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800">
            <Helmet>
        <title>About OTAN — Occupational Therapy Association of Nigeria</title>
        <meta
          name="description"
          content="Learn about the Occupational Therapy Association of Nigeria (OTAN) and its mission to support occupational therapists across Nigeria."
        />
      </Helmet>

      {/* Hero Section */}
      <AboutHero />

      {/* Who We Are */}
      <OurStory />

      {/* What We Do */}
      {/* <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-gray-100 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">What We Do</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-gray-700 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Continuing Professional Development (CPD)</h3>
            <p>
              OTAN provides workshops, seminars, webinars, and certification programs to enhance
              skills, knowledge, and professional growth for occupational therapists.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">License Registration Support</h3>
            <p>
              We assist members with professional license registration and compliance to maintain
              high standards in practice across Nigeria.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Conferences & Seminars</h3>
            <p>
              OTAN organizes national and regional conferences to promote networking, learning,
              and sharing of best practices among occupational therapy professionals.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Promotion & Awareness</h3>
            <p>
              We lead campaigns to educate the public about occupational therapy, raise awareness
              of its benefits, and advocate for better recognition of the profession.
            </p>
          </div>
        </div>
      </motion.section> */}
      <WhatWeDo />
      <WhyOT />

      <Leadership />

      

      {/* Join Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6 md:px-20 bg-gray-700 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Join OTAN Today</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Become part of Nigeria’s official occupational therapy community. Network, learn, and continue 
          to shape the future of OT profession and practice in Nigeria.
        </p>
        <Link to="/services">
          <Button variant="dark">Join Now</Button>
        </Link>
      </motion.section>
    </div>
  );
}
