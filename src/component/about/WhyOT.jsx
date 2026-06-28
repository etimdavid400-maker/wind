import { motion } from "framer-motion";
import whyOT from "../../assets/about/whyoT.png";

const areas = [
  {
    title: "Children",
    description:
      "Helping children develop the skills they need for learning, play, self-care, and participation at home and school.",
  },
  {
    title: "Adults",
    description:
      "Supporting individuals recovering from illness, injury, or disability to regain independence in daily activities and work.",
  },
  {
    title: "Older Adults",
    description:
      "Promoting healthy ageing by improving mobility, safety, confidence, and participation in meaningful everyday activities.",
  },
  {
    title: "Mental Health",
    description:
      "Helping individuals build routines, develop coping strategies, and participate confidently in work, education, and community life.",
  },
];

export default function WhyOT() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-[#0E7A46]">
            OCCUPATIONAL THERAPY
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Helping People Live Independent,
            Meaningful Lives
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Occupational therapy enables people of all ages to participate
            in the activities that matter most. Whether recovering from
            injury, managing a disability, or living with a health
            condition, occupational therapists help people regain
            independence and improve their quality of life.
          </p>

        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-16"
        >

          <img
            src={whyOT}
            alt="Occupational therapist helping a patient"
            className="w-full h-[250px] sm:h-[400px] lg:h-[550px] rounded-[36px] object-cover shadow-2xl"
          />

        </motion.div>

        {/* Areas */}

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {areas.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6
              }}
              className="border-l-4 border-[#0E7A46] pl-6"
            >

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Closing Statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-24 bg-[#F8FAFC] rounded-[36px] p-10 lg:p-14 text-center"
        >

          <h3 className="text-3xl font-bold text-gray-900">
            Every Person Deserves the Opportunity to Live Life Fully
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Occupational therapists empower people to overcome barriers,
            participate in meaningful activities, and achieve greater
            independence. At OTAN, we are committed to advancing this
            profession and ensuring quality occupational therapy services
            are accessible throughout Nigeria.
          </p>

        </motion.div>

      </div>
    </section>
  );
}