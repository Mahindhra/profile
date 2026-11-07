import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="navbar-wrapper">
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} aria-label="Main Navigation">
          {/* Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="nav-wordmark"
            aria-label="Mahindhra Home"
          >
            <span>{personalInfo.preferredName}</span>
            <span className="registered">®</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.id);
                    }}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                    {isActive && <span className="nav-link-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Area */}
          <div className="nav-actions">
            <ThemeToggle />

            <Button
              href={personalInfo.resumePdf}
              download="Doddi_Mahindhra_Resume.pdf"
              variant="primary"
              size="sm"
              isDownload
              className="desktop-only"
            >
              Resume
            </Button>

            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className={`mobile-drawer-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span>{item.label}</span>
              <span className="text-meta">0{navItems.indexOf(item) + 1}</span>
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <Button
            href={personalInfo.resumePdf}
            download="Doddi_Mahindhra_Resume.pdf"
            variant="primary"
            size="md"
            isDownload
          >
            Download Official Resume
          </Button>

          <Button
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            variant="secondary"
            size="md"
            withArrow
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </>
  );
}
