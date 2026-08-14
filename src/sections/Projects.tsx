import { Container } from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects-temp";
import { ProjectCard } from "../components/ProjectCard";
import { projectContainer } from "../animations/variants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hiddenbg-white py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white"
    >
      {/* Geometric Background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-15"
>
  <div
    className="absolute inset-0
      bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
      bg-[size:64px_64px]
      dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)]"
  />

  <div className="absolute -right-16 top-24 h-40 w-40 rounded-full border border-gray-300 dark:border-gray-700" />

  <div className="absolute -left-10 bottom-24 h-24 w-24 rotate-45 border border-gray-300 dark:border-gray-700" />
</div>
      <Container className="relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built to solve real-world problems."
        />

        <motion.div
          variants={projectContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
