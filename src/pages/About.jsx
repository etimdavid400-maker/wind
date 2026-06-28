import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
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
