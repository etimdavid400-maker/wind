import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../component/Button";
import Schools from "../component/Schools";
import { Helmet } from "react-helmet-async";
import Hero from "../component/Hero";
import aboutImage from "../assets/about1.png";
import { Target, Eye } from "lucide-react";




export default function Home() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
       <Helmet>
        <title>Occupational Therapy Association of Nigeria (OTAN)</title>
        <meta
          name="description"
          content="Occupational Therapy Association of Nigeria (OTAN) of NIGERIA OCCCUPATION"
        />
      </Helmet>

      {/* Hero Section */}
      {<Hero/>}

      {/* About Section */}

    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#0E7A46] mb-4">
          WHO WE ARE
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-10">
          About OTAN
        </h2>

        <img
          src={aboutImage}
          alt="OTAN Members"
          className="
            w-full
            md:w-[380px]
            lg:w-[430px]

            float-none
            md:float-right

            mb-8
            md:mb-5

            md:ml-10

            rounded-3xl

            shadow-xl

            object-cover
          "
        />

        <div className="space-y-6 text-lg leading-9 text-gray-700">

          <p>
            The Occupational Therapy Association of Nigeria (OTAN) is the
            national professional body representing occupational therapists
            across the country and promoting excellence in practice,
            education, and advocacy.
          </p>

          <p>
            Recognized by MRTBN and affiliated with WFOT, OTAN supports
            professional growth while advancing quality occupational
            therapy services for individuals, families, and communities.
          </p>

          <p>
            Together, we are building a stronger profession and creating
            opportunities for occupational therapists to improve lives
            across Nigeria.
          </p>

        </div>

        <div className="clear-both"></div>

        <Link
          to="/about"
          className="
            inline-flex
            items-center
            gap-2
            mt-10

            text-[#0E7A46]
            font-semibold

            hover:gap-4
            transition-all
          "
        >
          Learn More

          <span>→</span>

        </Link>

      </div>
    </motion.section>


    {/* Mission & Vision */}
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#F8FAFC] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#0E7A46] mb-4">
            OUR PURPOSE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Mission & Vision
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything we do is guided by a shared commitment to advancing
            occupational therapy and improving lives across Nigeria.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-3xl
              p-10
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              border
              border-gray-100
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-8">

              <Target className="w-8 h-8 text-[#0E7A46]" />

            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              To foster unity among occupational therapy practitioners in
              Nigeria while promoting professional excellence, advocacy,
              collaboration, education, and lifelong learning.
            </p>

          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-3xl
              p-10
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              border
              border-gray-100
            "
          >

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-8">

              <Eye className="w-8 h-8 text-[#0E7A46]" />

            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              To build a thriving community of occupational therapy
              professionals advancing healthcare, inclusion, independence,
              and meaningful participation for every Nigerian.
            </p>

          </motion.div>

        </div>

      </div>

    </motion.section>



      {/* Membership CTA Section */}
      <motion.section
        initial={{ opacity: 0, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-[#0E7A46] px-8 py-16 md:px-16 md:py-20 text-center">

            {/* Decorative circles */}
            <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-white/5"></div>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5"></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-green-200 mb-4">
                MEMBERSHIP
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Become Part of OTAN
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-green-50">
                Join a growing community of occupational therapy professionals
                working together to strengthen the profession, support lifelong
                learning, and improve lives across Nigeria.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                <Link
                  to="/services"
                  className="rounded-full bg-white px-8 py-4 font-semibold text-[#0E7A46] transition hover:scale-105"
                >
                  Become a Member
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0E7A46]"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>
      </motion.section>


      <Schools />
    </div>
  );
}
