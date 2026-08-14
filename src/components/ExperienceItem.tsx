import type { Experience } from "../data/experience";
import { motion } from "motion/react";

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="relative pl-10"
    >
      <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-gray-900 bg-white transition-colors duration-300 dark:border-white dark:bg-gray-950" />

      <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
        {experience.role}
      </h3>

      <p className="mt-1 font-medium text-gray-700 transition-colors duration-300 dark:text-gray-300">
        {experience.company} · {experience.location}
      </p>

      <p className="mt-1 text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">
        {experience.startDate} – {experience.endDate}
      </p>

      <p className="mt-3 leading-7 text-gray-600 transition-colors duration-300 dark:text-gray-300">
        {experience.description}
      </p>

      <ul className="list-disc mt-4 max-w-3xl space-y-2">
        {experience.highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-sm leading-6 text-gray-600 transition-colors duration-300 dark:text-gray-300"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ExperienceItem;