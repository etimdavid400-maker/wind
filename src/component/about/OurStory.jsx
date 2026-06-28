import { motion } from "framer-motion";
import storyImage from "../../assets/about/our-story.png";


export default function OurStory() {
  return (
    <section className="bg-white py-18">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={storyImage}
              alt="OTAN members collaborating"
              className="w-full rounded-[32px] shadow-xl object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#0E7A46] mb-4">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Strengthening Occupational Therapy Across Nigeria
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">

              <p>
                OTAN was established to unite occupational therapists across
                Nigeria under one professional body committed to excellence,
                collaboration, and ethical practice.
              </p>

              <p>
                Over the years, the Association has continued to support
                practitioners, educators, researchers, and students through
                advocacy, professional development, and national partnerships.
              </p>

              <p>
                Today, OTAN remains dedicated to strengthening the profession,
                promoting international standards, and improving access to
                quality occupational therapy services for every Nigerian.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}