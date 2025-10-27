import React from "react";
import { motion } from "framer-motion";
import Card from "../component/Card";
import Precious from "../assets/precious.jpg";
import Ayeni from "../assets/ayeni-President.jpg";

export default function Blog() {
  const cards = [
    {
      img: Precious,
      head: "OTAN Mission",
      message:
        "At OTAN, we are committed to advancing occupational therapy in Nigeria by fostering excellence, collaboration, and innovation among practitioners.",
      fullText: 
        "",
    },
    {
      img: Ayeni,
      head: "Meet the President of OTAN",
      message:
        "Get to know the visionary leader guiding the Occupational Therapy Association of Nigeria. Learn about their journey, achievements, and vision for advancing occupational therapy across the country.",
    },
    {
      img: Precious,
      head: "Celebrating OT Day in Nigeria",
      message:
        "Join OTAN as we honor the dedication and impact of occupational therapists across Nigeria. OT Day is a moment to highlight achievements, inspire collaboration, and showcase how occupational therapy transforms lives.",
        fullText: 
        "",
    },
  ];

  return (
    <div className="w-full min-h-screen pt-20 bg-gray-50 text-gray-800">
      <section className="p-6 md:px-20 min-h-screen">
        {/* Page Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center py-4 text-gray-800"
        >
          Latest Articles
        </motion.h2>

        {/* Featured / Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="py-16 px-6 md:px-20 bg-white rounded-xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
            Top Stories and Engagement in OTAN
          </h2>
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-600">
            <p className="mb-6">
              The Occupational Therapy Association of Nigeria (OTAN) is dedicated to promoting excellence in the field of occupational therapy. We provide guidance, training, and support to practitioners across the country, ensuring that every member can deliver high-quality care to their communities.
            </p>
            <p>
             Through collaborative initiatives, professional development programs, and advocacy efforts, OTAN strives to raise awareness of occupational therapy’s vital role in improving health and well-being. Our goal is to foster a united, knowledgeable, and innovative community of practitioners making a tangible impact throughout Nigeria.
            </p>
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {cards.map((item, index) => (
            <Card
              key={index}
              head={item.head}
              message={item.message}
              fullText={item.fullText}
              btn="Read More"
              img={item.img} // ✅ Pass your imported image
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
