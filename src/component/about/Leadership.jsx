import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import presidentImg from "../../assets/ayeni.jpeg";
import vice from "../../assets/peter-pro.jpg";
import secretary from "../../assets/dusi-genSec.jpg";
import treasurer from "../../assets/precious.jpg";

/* =======================
   PRESIDENT SECTIONS
======================= */
const sections = [
  {
    title: "Biography",
    content:
      "Oluwasegun E. Ayeni is the third substantive National President of the Occupational Therapists Association of Nigeria (OTAN). As an Occupational Therapist, he obtained his Bachelor’s degree in Medical Rehabilitation with specialization in Occupational Therapy (BMR–OT) from Obafemi Awolowo University, Ile-Ife, Nigeria.",
  },
  {
    title: "Academic Background",
    content:
      "He also possesses a Master's degree in Public Health (MSc. PH) from the University of Medical Sciences, Ondo, Nigeria, where he is currently pursuing a PhD in the same field.",
  },
  {
    title: "Current Role",
    content:
      "He currently serves as a lecturer and researcher in the Department of Occupational Therapy, University of Medical Sciences, where he is also the Head of Department.",
  },
  {
    title: "The REFORM Agenda",
    content: (
      <ul className="space-y-3 list-disc pl-5">
        <li><strong>R</strong> – Representation of all members</li>
        <li><strong>E</strong> – Education pathways for interested members</li>
        <li><strong>F</strong> – Full Membership with local and international associations</li>
        <li><strong>O</strong> – Operation against quackery and professional impostors</li>
        <li><strong>R</strong> – Rebirth of our dream association</li>
        <li><strong>M</strong> – Membership Professional Development</li>
      </ul>
    ),
  },
];

/* =======================
   LEADERS DATA
======================= */
const leaders = [
  {
    image: vice,
    name: "OT. Peter Akinsolu",
    role: "PRO",
  },
  {
    image: secretary,
    name: "OT. Jesudunsi Shammuah",
    role: "General Secretary",
  },
  {
    image: treasurer,
    name: "Oyedokun Precious",
    role: "OTA Rep",
  },
];

export default function LeadershipPage() {
  const [open, setOpen] = useState(null);

  const toggleSection = (index) => {
    setOpen((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* =======================
            HEADER
        ======================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[#0E7A46] font-semibold text-sm">
            LEADERSHIP
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Meet the Leadership of OTAN
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our leadership is committed to advancing occupational therapy,
            supporting members, and promoting excellence across Nigeria.
          </p>
        </div>

        {/* =======================
            PRESIDENT SECTION
        ======================= */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-start">

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={presidentImg}
            alt="President"
            className="rounded-[32px] shadow-xl w-full object-cover"
          />

          <div>
            <p className="uppercase tracking-[0.3em] text-[#0E7A46] font-semibold text-sm">
              PRESIDENT
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Meet The President
            </h2>

            <h3 className="mt-3 text-2xl font-semibold text-[#0E7A46]">
              OT. Oluwasegun Ayeni
            </h3>

            <p className="text-gray-500 mt-2">
              National President, Occupational Therapy Association of Nigeria
            </p>

            {/* Accordion */}
            <div className="mt-10 space-y-4">
              {sections.map((section, index) => {
                const isOpen = open === index;

                return (
                  <div
                    key={index}
                    className="border rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full flex justify-between items-center p-5 font-semibold text-left hover:bg-gray-50 transition"
                    >
                      {section.title}
                      <span className="text-2xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-gray-600 leading-8">
                            {section.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =======================
            OTHER LEADERS
        ======================= */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {leader.name}
                </h3>

                <p className="mt-2 text-[#0E7A46] font-medium">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}