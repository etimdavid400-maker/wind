import React from "react";
import { motion } from "framer-motion";
import Precious from "../assets/precious.jpg";
import Ayeni from "../assets/ayeni-President.jpg";
import Dunsi from "../assets/dusi-genSec.JPG";
import Peter from "../assets/peter-pro.jpg";
import Button from "../component/Button";
import { Link } from "react-router-dom";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="relative py-28 px-6 md:px-20 text-center text-white overflow-hidden bg-gradient-to-r from-gray-800 to-gray-600"
      >
        <img
          src={Precious}
          alt="OTAN Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About OTAN</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            The Occupational Therapy Association of Nigeria (OTAN) is dedicated to advancing
            occupational therapy education, practice, and research throughout Nigeria.
          </p>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-white text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Who We Are</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
          <p className="mb-6">
            OTAN serves as the professional body representing occupational therapists across Nigeria.
            We are committed to ensuring that occupational therapy services meet global standards
            while being ethical, accessible, and effective for the Nigerian population.
          </p>
          <p>
            Through collaboration, education, and policy advocacy, OTAN supports therapists, students,
            and institutions in enhancing clinical practice, research, and education in occupational therapy.
          </p>
        </div>
      </motion.section>

      {/* What We Do */}
      <motion.section
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
      </motion.section>

      {/* Meet The President */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-gray-100"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Meet The President</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 text-gray-700">
          
          {/* Image with hover zoom */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 w-full md:w-1/3"
          >
            <img
              src={Ayeni}
              alt="OT. Ayeni Salua"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>

          {/* Bio */}
          <div className="w-full md:w-2/3 text-left">
            <p className="mb-6">
              Oluwasegun E. Ayeni is the third substantive National President of the Occupational Therapists Association of Nigeria (OTAN). 
              As an Occupational Therapist, he obtained his bachelor’s degree in Medical Rehabilitation with specialization in Occupational Therapy (BMR – OT) from Obafemi Awolowo University (OAU), Ile-Ife, Nigeria. 
              He also possesses a Master’s degree in Public Health (MSc.PH) from the University of Medical Sciences, Ondo, Nigeria, where he is currently pursuing a PhD programme in the same field.
            </p>
            <p className="mb-6">
              He currently works as an Occupational Therapy lecturer and researcher at the Department of Occupational Therapy, University of Medical Sciences, where he also serves as the Head of the Department. 
              As the National President, he is committed to a six-point agenda he coined as the <strong>REFORM</strong> agenda:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>R:</strong> Representation of all members</li>
              <li><strong>E:</strong> Education pathways for interested members</li>
              <li><strong>F:</strong> Full Membership with local and international associations</li>
              <li><strong>O:</strong> Operation against quackery and professional impostors</li>
              <li><strong>R:</strong> Rebirth of our dream association</li>
              <li><strong>M:</strong> Membership Professional development</li>
            </ul>
          </div>
        </div>
      </motion.section>


      {/* Leadership */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-white text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Leadership</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { img: Peter, name: "OT. Peter Akinsolu", role: "PRO" },
            { img: Ayeni, name: "OT. Ayeni Salua", role: "President" },
            { img: Dunsi, name: "OT. Jesudunsi Shammuah", role: "Secretary General" },
          ].map((person, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden"
            >
              <img src={person.img} alt={person.name} className="h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-gray-500">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

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
          Become part of Nigeria’s leading occupational therapy community. Network, learn, and contribute
          to shaping the future of occupational therapy.
        </p>
        <Link to="/services">
          <Button variant="dark">Join Now</Button>
        </Link>
      </motion.section>
    </div>
  );
}
