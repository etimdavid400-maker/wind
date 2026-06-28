import React from "react";
import { motion } from "framer-motion";

export default function Schools() {
  const institutions = [
    {
      name: "University of Medical Sciences",
      location: "Ondo",
      website: "https://www.unimed.edu.ng/faculties/FOSC",
    },
    {
      name: "Obafemi Awolowo University",
      location: "Ile-Ife",
      website: "https://oauife.edu.ng",
    },
    {
      name: "Federal University of Health Sciences",
      location: "Azare, Bauchi",
      website: "https://fuhsa.edu.ng/",
    },
    {
      name: "Federal University of Medical and Health Sciences",
      location: "Funtua, Katsina",
      website: "https://fumhsf.edu.ng/study/undergraduate",
    },
    {
      name: "Federal University of Environment and Technology",
      location: "Rivers State",
      website: "https://fuet.edu.ng/faculty-of-allied-health-sciences/",
    },
    {
      name: "Federal School of Occupational Therapy",
      location: "Oshodi, Lagos",
      website: "https://fsot.fnphyaba.gov.ng/index.php",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#0E7A46] mb-4">
            EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Study Occupational Therapy
            <br />
            in Nigeria
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Explore institutions across Nigeria offering occupational
            therapy education and begin your journey toward a rewarding
            healthcare profession.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {institutions.map((school, index) => (
            <motion.a
              key={index}
              href={school.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="
                group
                block
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                transition-all
                duration-300
                hover:border-[#0E7A46]
                hover:shadow-xl
              "
            >
              {/* Accent Bar */}
              <div className="h-2 bg-[#0E7A46]" />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0E7A46] transition-colors">
                  {school.name}
                </h3>

                <p className="mt-3 text-gray-500">
                  📍 {school.location}
                </p>

                <div className="mt-8 flex items-center text-[#0E7A46] font-semibold">

                  Visit Website

                  <span className="ml-2 transition-transform group-hover:translate-x-2">
                    →
                  </span>

                </div>

              </div>

            </motion.a>
          ))}

        </div>

      </div>
    </motion.section>
  );
}