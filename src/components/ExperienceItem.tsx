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
      <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-gray-900 bg-white" />
      <h3 className="text-xl font-semibold text-gray-900">{experience.role}</h3>

      <p className="mt-1 font-medium text-gray-700">
        {experience.company} · {experience.location}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {experience.startDate} – {experience.endDate}
      </p>

      <p>{experience.description}</p>

      <ul className="mt-4 max-w-3xl space-y-2">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="text-sm leading-6 text-gray-600">
            • {highlight}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ExperienceItem;
