import React from 'react';
import { motion } from 'framer-motion';

export default function Schools() {
  const institutions = [
    { name: "University of Medical Sciences,", location: "Ondo", website: "https://www.unimed.edu.ng/faculties/FOSC" },
    { name: "Obafemi Awolowo University", location: "Ile-Ife", website: "https://oauife.edu.ng" },
    { name: "Federal University of Health Science (Azare, Bauchi)", location: "Azare, Bauchi", website: "https://fuhsa.edu.ng/" },
    { name: "Federal University of Medical And Health Sciences", location: "Funtua, Katsina", website: "https://fumhsf.edu.ng/study/undergraduate" },
    { name: "Federal University of Environment and Technology", location: "Rivers state", website: "https://fuet.edu.ng/faculty-of-allied-health-sciences/# " },
    { name: "Federal School of Occupational therapy, Oshodi", location: "Oshodi, Lagos", website: "https://fsot.fnphyaba.gov.ng/index.php " },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-20 bg-white text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Institutions Offering Occupational Therapy</h2>
      <p className="max-w-2xl mx-auto mb-12 text-gray-700">
        Explore accredited universities and colleges in Nigeria that offer programs in Occupational Therapy.
        Connect with these institutions to start your journey in the OT profession.
      </p>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {institutions.map((inst, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 rounded-2xl shadow-md p-6 text-left"
          >
            <h3 className="text-xl font-semibold mb-2">{inst.name}</h3>
            <p className="text-gray-500 mb-3">{inst.location}</p>
            <a
              href={inst.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Visit Website
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
