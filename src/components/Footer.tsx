import type { FooterData } from "../data/footer";
import navLinks from "../data/navigation";
import { Container } from "./Container";

interface FooterProps {
  footerData: FooterData;
}

const Footer = ({ footerData }: FooterProps) => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {footerData.name}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {footerData.identity}
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>
            <div className="mt-10 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">{footerData.copyright}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
