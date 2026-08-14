import { motion } from "motion/react";
import type { strength } from "../data/strengths";
import { strengthItem } from "../animations/variants";

interface StrengthCardProps {
  strength: strength;
}

export const StrengthCard = ({ strength }: StrengthCardProps) => {
  return (
    <motion.div
      variants={strengthItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
        {strength.title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600 transition-colors duration-300 dark:text-gray-300">
        {strength.details}
      </p>
    </motion.div>
  );
};