import { Container } from "../components/Container";
import { contactLinks } from "../data/contact";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gray-900 px-6 py-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Have a project, opportunity, or idea? I'd love to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition hover:-translate-y-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="/cv/Emmanuel_Onwuzuruigbo_CV.pdf"
              download
              className="text-sm font-medium text-gray-300 transition hover:text-white hover:underline"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
