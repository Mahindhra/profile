import React from 'react';
import { ArrowDown, Github, Mail, Linkedin, MapPin, Sparkles, Code2, Terminal } from 'lucide-react';
import Button from '../components/Button';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section bg-grid-pattern" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '7.5rem' }}>
      <div className="bg-radial-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Asymmetric Editorial Content */}
          <div>
            {/* Status Eyebrow */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge-status">
                <span className="status-pulse-dot" />
                <span>{personalInfo.status}</span>
              </span>
            </div>

            {/* Sub-intro */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
              <span className="text-mono" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>00 // INTRODUCTION</span>
              <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--border-strong)' }} />
              <span className="text-meta">{personalInfo.title}</span>
            </div>

            {/* Oversized Editorial Heading */}
            <h1 className="display-hero" style={{ marginBottom: '1.5rem' }}>
              {personalInfo.tagline}
            </h1>

            {/* Personal Statement & Bio */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p className="lead-text" style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.65rem' }}>
                {personalInfo.introduction}
              </p>
              <p style={{ maxWidth: '56ch' }}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => scrollTo('projects')}
              >
                Explore My Work
              </Button>

              <Button
                href={personalInfo.resumePdf}
                download="Doddi_Mahindhra_Resume.pdf"
                variant="secondary"
                size="lg"
                isDownload
              >
                Download Resume
              </Button>
            </div>

            {/* Secondary Verified Links & Meta Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem',
                flexWrap: 'wrap',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line-draw"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                <span className="text-mono">GitHub</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="hover-line-draw"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                aria-label="Email Address"
              >
                <Mail size={16} />
                <span className="text-mono">Email</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line-draw"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span className="text-mono">LinkedIn</span>
              </a>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.875rem', color: 'var(--text-tertiary)', marginLeft: 'auto' }}>
                <MapPin size={14} color="var(--accent-blue)" />
                <span className="text-meta">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Precision Geometry */}
          <div className="hero-visual-column" style={{ position: 'relative' }}>
            <div
              className="portrait-wrapper"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                padding: '0.75rem'
              }}
            >
              <div style={{ position: 'relative', borderRadius: 'calc(var(--radius-xl) - 8px)', overflow: 'hidden' }}>
                <img
                  src={personalInfo.portraitImage}
                  alt="Doddi Mahindhra — Aspiring Software Developer"
                  className="portrait-image"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block'
                  }}
                  loading="eager"
                />

                {/* Subtle Gradient Veil */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 70%, rgba(16, 17, 20, 0.45) 100%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* Minimal floating annotation badge */}
              <div
                className="floating-element"
                style={{
                  position: 'absolute',
                  bottom: '1.75rem',
                  left: '1.75rem',
                  right: '1.75rem',
                  padding: '0.85rem 1.15rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-glass-heavy)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)', fontWeight: 600 }}>
                    TECHNICAL FOCUS
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Software Development & Web
                  </div>
                </div>

                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)'
                  }}
                >
                  <Terminal size={16} />
                </div>
              </div>
            </div>

            {/* Corner Precision Accent Marker */}
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '32px',
                height: '32px',
                borderTop: '2px solid var(--accent-blue)',
                borderRight: '2px solid var(--accent-blue)',
                pointerEvents: 'none'
              }}
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '4rem',
            cursor: 'pointer'
          }}
          onClick={() => scrollTo('about')}
        >
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-wheel" />
          </div>
          <span className="text-meta" style={{ letterSpacing: '0.12em', fontSize: '0.7rem' }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
