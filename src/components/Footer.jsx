import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Mail, Linkedin, MapPin, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Visakhapatnam is in IST (UTC+5:30)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-IN', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-surface)', padding: '4.5rem 0 3rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Brand Column */}
          <div>
            <div className="nav-wordmark" style={{ fontSize: '1.25rem', marginBottom: '0.85rem' }}>
              <span>{personalInfo.fullName}</span>
              <span className="registered">®</span>
            </div>
            <p style={{ fontSize: '0.925rem', marginBottom: '1.25rem', maxWidth: '34ch' }}>
              Aspiring Software Developer passionate about engineering clean, maintainable, and meaningful digital experiences.
            </p>
            <div className="badge-status">
              <span className="status-pulse-dot" />
              <span>Open to Opportunities</span>
            </div>
          </div>

          {/* Location & Time Column */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Location & Timezone</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <MapPin size={16} color="var(--accent-blue)" />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <Clock size={16} color="var(--accent-blue)" />
                <span className="text-mono">IST (UTC+5:30) — {localTime || '11:45 AM'}</span>
              </div>
            </div>
          </div>

          {/* Verified Profiles Column */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Verified Channels</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line-draw"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}
              >
                <Github size={15} />
                <span>github.com/{personalInfo.githubUsername}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover-line-draw"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}
              >
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line-draw"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--text-secondary)' }}
              >
                <Linkedin size={15} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div className="text-meta">
            © {new Date().getFullYear()} Doddi Mahindhra. Built with precision, React, and modular CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ borderRadius: 'var(--radius-pill)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
