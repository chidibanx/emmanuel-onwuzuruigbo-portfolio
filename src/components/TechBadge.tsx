import type { Technology } from "../data/technologies";
import { motion } from "motion/react";
import { techItem } from "../animations/variants";

interface TechBadgeProps {
  technology: Technology;
}

export const TechBadge = ({ technology }: TechBadgeProps) => {
  return (
    <motion.span
      variants={techItem}
      className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      {technology.name}
    </motion.span>
  );
};