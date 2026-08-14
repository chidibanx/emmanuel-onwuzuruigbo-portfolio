import { hero } from "../data/hero";
import { technologies } from "../data/technologies";
import { TechBadge } from "../components/TechBadge";
import { motion } from "motion/react";
import { techContainer } from "../animations/variants";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-2 md:grid-cols-2">
        {/* Hero Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium"
          >
            {hero.badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" mt-8 flex gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              {hero.buttons.primary}
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
            >
              {hero.buttons.secondary}
            </motion.a>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-gray-50"
        >
          Image Placeholder
        </motion.div>
        <div>
          <p className="mt-4 text-sm font-medium text-gray-500">
            Technologies I work with
          </p>
          <motion.div
            variants={techContainer}
            initial="hidden"
            animate="visible"
            className="mt-3 flex flex-wrap gap-2"
          >
            {technologies.map((tech) => (
              <TechBadge key={tech.name} technology={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
