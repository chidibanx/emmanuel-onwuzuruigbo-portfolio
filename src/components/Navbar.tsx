import { useState } from "react";
import type { NavLink } from "../data/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar = ({ navLinks }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/90"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white"
        >
          Onwuzuruigbo Emmanuel
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Desktop Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            className="flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            className="flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="text-gray-900 transition-colors duration-300 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 px-6 pb-5 transition-colors duration-300 dark:border-gray-800 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;