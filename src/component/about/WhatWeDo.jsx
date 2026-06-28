import { motion } from "framer-motion";
// import bgImage from "../../assets/about/whatwedo.jpg";
import bgImage from "../../assets/about/our-story.png";

const services = [
  {
    title: "Continuing Professional Development (CPD)",
    description:
      "OTAN provides workshops, seminars, webinars, and certification programs to enhance skills, knowledge, and professional growth for occupational therapists.",
  },
  {
    title: "License Registration Support",
    description:
      "We assist members with professional license registration and compliance to maintain high standards in practice across Nigeria.",
  },
  {
    title: "Conferences & Seminars",
    description:
      "OTAN organizes national and regional conferences to promote networking, learning, and sharing of best practices among occupational therapy professionals.",
  },
  {
    title: "Promotion & Awareness",
    description:
      "We lead campaigns to educate the public about occupational therapy, raise awareness of its benefits, and advocate for better recognition of the profession.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <img
        src={bgImage}
        alt="Occupational therapists"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A3B2E]/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-[#D4B15A] font-semibold text-sm">
            WHAT WE DO
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold">
            Supporting Occupational Therapy Across Nigeria
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-8">
            Through education, advocacy, professional development and
            collaboration, OTAN empowers occupational therapists to deliver
            high-quality services throughout Nigeria.
          </p>
        </motion.div>

        {/* Services */}

        <div className="grid lg:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 hover:bg-white/15 transition"
            >

              <div className="flex items-start gap-5">

                <div className="w-12 h-12 rounded-full bg-[#0E7A46] flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-200 leading-8">
                    {service.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}