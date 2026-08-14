import { Container } from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { motion } from "motion/react";
import { StrengthCard } from "../components/StrengthCard";
import { strengths } from "../data/strengths";
import { strengthContainer } from "../animations/variants";

const About = () => {
  return (
    <section id="about" className="py-16">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Building software with a broader engineering perspective."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* About content */}

          <div className="mt-14 max-w-xl">
            <p className="text-lg leading-8 text-gray-600">
              I'm a Software engineer with experience spanning web development,
              business automation, and software quality assurance. I enjoy
              turning business requirements into practical digital solutions
              that are reliable, accessible, and easy to use.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              My current work involves building and maintaining web platforms,
              developing internal workflow applications, and collaborating with
              business and technical teams to improve how processes are
              delivered. My previous experience in QA has also shaped how I
              approach development, with a strong focus on usability,
              reliability, and testing.
            </p>
          </div>
          {/* Strengths */}
          <motion.div
            variants={strengthContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {strengths.map((strength) => (
              <StrengthCard key={strength.title} strength={strength} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
