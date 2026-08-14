import { Container } from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
  id="experience"
  className="bg-white py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white"
>
      <Container>
        <SectionHeading
          title="Experience"
          subtitle="My journey across frontend development, automation, and quality engineering."
        />

        <div className="relative mt-12">
          <div className="absolute left-2 top-0 h-full w-px bg-gray-200 transition-colors duration-300 dark:bg-gray-800" />

          <div
            className="space-y-12"
          >
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.role}`}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
