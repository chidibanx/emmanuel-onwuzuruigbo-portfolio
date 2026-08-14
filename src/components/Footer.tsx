import type { FooterData } from "../data/footer";
import navLinks from "../data/navigation";
import { Container } from "./Container";

interface FooterProps {
  footerData: FooterData;
}

const Footer = ({ footerData }: FooterProps) => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950">
  <Container>
    <div className="py-12">
      
      {/* Top footer content */}
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {footerData.name}
          </p>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {footerData.identity}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {footerData.copyright}
        </p>
      </div>

    </div>
  </Container>
</footer>
  );
};

export default Footer;