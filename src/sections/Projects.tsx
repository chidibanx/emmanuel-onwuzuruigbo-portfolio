import { Container } from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects-temp";
import { ProjectCard } from "../components/ProjectCard";
import { projectContainer } from "../animations/variants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <Container>
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
