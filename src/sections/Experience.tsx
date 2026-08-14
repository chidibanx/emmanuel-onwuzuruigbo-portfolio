import { Container } from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ExperienceItem from "../components/ExperienceItem";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
  id="experience"
  className="relative overflow-hidden bg-white py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white"
>
  {/* Geometric Background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-25"
>
  <div className="absolute -right-20 top-32 h-40 w-40 rounded-full border border-gray-400 dark:border-gray-600" />

  <div className="absolute -left-12 bottom-24 h-24 w-24 rotate-45 border border-gray-400 dark:border-gray-600" />
</div>
      <Container className="relative z-10">
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
