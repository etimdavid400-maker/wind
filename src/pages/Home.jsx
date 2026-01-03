import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../component/Button";
import Schools from "../component/Schools";

export default function Home() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-gray-800 to-gray-600 pt-40 text-white py-28 px-6 md:px-20 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to the Occupational Therapy Association of Nigeria (OTAN)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg md:text-xl max-w-2xl mx-auto my-10"
        >
          Promoting excellence, collaboration, and innovation in occupational therapy across Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link  to="/about">
            <Button variant="primary" onClick={() => console.log("Clicked!")}>
              Learn More
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-white"
      >
        <h2 className="text-3xl font-bold text-center mb-10">About OTAN</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p className="mb-6">
            OTAN is an independent organization recognized by the Medical Rehabilitation Therapists’
             (Registration) Board of Nigeria (MRTBN) and World Federation of Occupational Therapy (WFOT).
          </p>
          <p>
            OTAN represents the interest of occupational therapy profession in Nigeria. As a body, we strive to increase representation of the profession
             and welfare of its members at all levels of healthcare across all zones in Nigeria and internationally.
            OTAN strives to advance excellence in occupational therapy practice by enabling engagement in meaningful lives for everyone.

          </p>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Our Mission & Vision</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-gray-700">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Mission</h3>
            <p>
              To foster unity among occupational therapy practitioners in Nigeria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Vision</h3>
            <p>
              To build a community of practitioners that will advance the occupational therapy profession in Nigeria.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Membership CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 md:px-20 bg-gray-700 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Join the OTAN Community</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Become a member and be part of Nigeria’s growing network of dedicated occupational therapy professionals.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link to="/services">
            <Button variant="dark">Register</Button>
          </Link>
        </motion.div>
      </motion.section>
      <Schools />
    </div>
  );
}
