import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import ThemeToggle from './ThemeToggle';

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  navigate: (page: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Giới thiệu' },
  { href: '#development', label: 'Phát triển' },
  { href: '#news', label: 'Tin tức' },
  { href: '#contact', label: 'Đăng ký' },
  { href: 'resources', label: 'Tài Nguyên' },
  { href: 'guide', label: 'Hướng dẫn' },
  { href: 'quiz', label: 'Game Quiz' },
];

const Navbar: React.FC<NavbarProps> = ({ navigate, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(sectionId);
      } else {
        navigate('home');
        setTimeout(() => {
          const homeElement = document.getElementById(sectionId);
          if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg dark:shadow-brand-green/10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">

          {/* Logo + Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/logo/logo.png"
              alt="LeNin Chess Logo"
              className="w-14 h-14 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
            />
            <span>
              LeNin <span className="text-brand-gold">Chess</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-gray-600 dark:text-gray-300 hover:text-brand-gold transition-colors duration-300 font-medium ${
                  activeSection === link.href.substring(1)
                    ? 'text-brand-gold border-b-2 border-brand-gold'
                    : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden lg:block bg-brand-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Đăng ký sớm
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-gray-600 dark:text-gray-300 hover:text-brand-gold transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-brand-gold font-bold'
                    : ''
                }`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-green hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Đăng ký sớm
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
