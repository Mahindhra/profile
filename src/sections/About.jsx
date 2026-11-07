import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo, professionalHighlights } from '../data/portfolioData';
import { CheckCircle2, Compass, Layers, Users, Zap } from 'lucide-react';

const highlightIcons = [
  <Zap size={20} color="var(--accent-blue)" />,
  <Compass size={20} color="var(--accent-blue)" />,
  <Users size={20} color="var(--accent-blue)" />,
  <Layers size={20} color="var(--accent-blue)" />
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="GET TO KNOW ME"
          title="Curiosity drives the way I build."
          rightMeta="BACKGROUND & MINDSET"
        />

        <div className="editorial-grid-2col" style={{ alignItems: 'start' }}>
          
          {/* Left Column: Big Editorial Statement */}
          <div>
            <div style={{ position: 'sticky', top: '6rem' }}>
              <div
                style={{
                  borderLeft: '3px solid var(--accent-blue)',
                  paddingLeft: '1.75rem',
                  marginBottom: '2rem'
                }}
              >
                <blockquote className="text-editorial-statement">
                  "Software development is the craft of turning disciplined logic into intuitive digital reality."
                </blockquote>
              </div>

              <div className="card card-muted" style={{ padding: '1.75rem', marginTop: '2rem' }}>
                <div className="text-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  CORE PILLARS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-blue)" />
                    <span>Discipline & Methodical Code Structure</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-blue)" />
                    <span>Focus on Core Fundamentals (Java, C, SQL)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-blue)" />
                    <span>Cross-functional Team Synergy & Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Professional Highlights */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              {personalInfo.extendedBio.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'lead-text' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Four Professional Highlights */}
            <div style={{ marginBottom: '1rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>
                PROFESSIONAL HIGHLIGHTS
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                {professionalHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="card card-hoverable"
                    style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {highlightIcons[index % highlightIcons.length]}
                      </div>
                      <span className="text-meta">0{index + 1}</span>
                    </div>

                    <div>
                      <h4 className="display-h4" style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.875rem', lineHeight: '1.55' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
