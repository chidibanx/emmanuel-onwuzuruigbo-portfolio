import type { Project } from "../data/projects-temp";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      {project.image && (
        <div className="mb-6 aspect-video overflow-hidden rounded-xl bg-gray-50 transition-colors duration-300 dark:bg-gray-800">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-contain"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600 transition-colors duration-300 dark:text-gray-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-200"
          >
            {technology}
          </span>
        ))}
      </div>

      {project.impact && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
            Impact
          </p>

          <ul className="list-disc mt-3 space-y-2">
            {project.impact.map((item) => (
              <li
                key={item}
                className="text-sm leading-6 text-gray-600 transition-colors duration-300 dark:text-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(project.liveUrl || project.githubUrl) && (
        <div className="mt-6 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:text-white dark:focus:ring-white dark:focus:ring-offset-gray-900"
            >
              View Project →
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
};