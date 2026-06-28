import { motion } from "framer-motion";
import aboutHero from "../../assets/about/aboutHero.png";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-28 sm:pt-32 lg:pt-40 pb-10 lg:pb-24">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-green-100/40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-green-50 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-[#0E7A46] mb-5">
              ABOUT OTAN
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Advancing Occupational Therapy Across Nigeria
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 max-w-xl">
              The Occupational Therapy Association of Nigeria (OTAN) is
              dedicated to advancing occupational therapy education,
              professional practice, and research throughout Nigeria.
            </p>

            <p className="mt-5 text-base sm:text-lg leading-8 text-gray-600 max-w-xl">
              As the national professional body for occupational therapists,
              OTAN promotes ethical practice, professional excellence,
              collaboration, education, and advocacy while supporting the
              growth of occupational therapy for the benefit of individuals,
              families, and communities.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">

              <div className="px-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm">
                <span className="text-sm sm:text-base font-semibold text-[#0E7A46]">
                  National Professional Body
                </span>
              </div>

              <div className="px-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm">
                <span className="text-sm sm:text-base font-semibold text-[#0E7A46]">
                  Education • Research • Advocacy
                </span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 max-w-lg mx-auto lg:max-w-none"
          >

            <img
              src={aboutHero}
              alt="Occupational therapists in Nigeria"
              className="
                w-full
                h-[320px]
                sm:h-[420px]
                md:h-[520px]
                lg:h-[620px]
                object-cover
                rounded-[32px]
                shadow-2xl
              "
            />

            {/* Floating Card - Hidden on Mobile */}
            <div className="hidden sm:block absolute -bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6 max-w-xs">

              <p className="text-sm uppercase tracking-widest font-semibold text-[#0E7A46]">
                Our Commitment
              </p>

              <p className="mt-3 text-gray-600 leading-7">
                Supporting therapists, students, and institutions to
                strengthen occupational therapy practice, education,
                research, and advocacy across Nigeria.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}