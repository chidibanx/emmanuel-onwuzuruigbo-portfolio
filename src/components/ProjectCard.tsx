import { useState } from "react";
import { motion } from "motion/react";
import type { Project } from "../data/projects-temp";

interface ProjectCardProps {
  project: Project;
}

const ScreenshotGallery = ({ project }: ProjectCardProps) => {
  const screenshots =
    project.screenshots ??
    (project.image ? [{ src: project.image, label: `${project.title} preview` }] : []);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  if (screenshots.length === 0) return null;

  return (
    <div>
      <div className="aspect-video overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
        <img
          src={screenshots[activeScreenshot].src}
          alt={`${project.title}: ${screenshots[activeScreenshot].label}`}
          className="h-full w-full object-contain"
        />
      </div>
      {screenshots.length > 1 && (
        <div className="flex items-center justify-between gap-3 pt-2 text-sm text-gray-600 dark:text-gray-300">
          <button
            type="button"
            onClick={() =>
              setActiveScreenshot((activeScreenshot - 1 + screenshots.length) % screenshots.length)
            }
            aria-label="Show previous screenshot"
            className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Previous
          </button>
          <span className="text-center" aria-live="polite">
            {screenshots[activeScreenshot].label} | {activeScreenshot + 1} / {screenshots.length}
          </span>
          <button
            type="button"
            onClick={() => setActiveScreenshot((activeScreenshot + 1) % screenshots.length)}
            aria-label="Show next screenshot"
            className="rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

const ProjectDetails = ({ project }: ProjectCardProps) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{project.description}</p>

    {project.problem && (
      <div className="mt-5">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Problem</p>
        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{project.problem}</p>
      </div>
    )}

    {project.solution && (
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Solution</p>
        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{project.solution}</p>
      </div>
    )}

    {project.contribution && (
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">My contribution</p>
        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{project.contribution}</p>
      </div>
    )}

    <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
      {project.technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          {technology}
        </span>
      ))}
    </div>

    {project.impact && (
      <div className="mt-5">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Outcome</p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          {project.impact.map((item) => (
            <li key={item} className="text-sm leading-6 text-gray-600 dark:text-gray-300">
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
            className="font-medium text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:text-white dark:focus:ring-white dark:focus:ring-offset-gray-900"
          >
            View Project →
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            GitHub →
          </a>
        )}
      </div>
    )}
  </div>
);

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${
      project.featured ? "md:col-span-2 md:p-8" : ""
    }`}
  >
    {project.featured ? (
      <>
        <p className="mb-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-200">
          Flagship project
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:items-center">
          <ScreenshotGallery project={project} />
          <ProjectDetails project={project} />
        </div>
      </>
    ) : (
      <>
        <div className="mb-6">
          <ScreenshotGallery project={project} />
        </div>
        <ProjectDetails project={project} />
      </>
    )}
  </motion.article>
);
