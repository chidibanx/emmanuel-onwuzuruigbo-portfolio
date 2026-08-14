import type { Project } from "../data/projects-temp";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  console.log(project);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {project.image && (
        <div className="mb-6 aspect-video overflow-hidden rounded-xl bg-gray-50">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
          >
            {technology}
          </span>
        ))}
      </div>
      {project.impact && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">Impact</p>

          <ul className="mt-3 space-y-2">
            {project.impact.map((item) => (
              <li key={item} className="text-sm leading-6 text-gray-600">
                • {item}
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
              className="font-medium text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              View Project →
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 hover:text-gray-900"
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
};
