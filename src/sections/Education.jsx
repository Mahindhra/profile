import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationHistory } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="ACADEMIC FOUNDATION"
          title="Academic foundation."
          description="Rigorous coursework in mathematics, electronics, computer science, and fundamental analytical sciences."
          rightMeta="DEGREES & PERFORMANCE"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
          {educationHistory.map((edu, index) => (
            <div
              key={edu.id}
              className="card card-hoverable"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                position: 'relative'
              }}
            >
              <div>
                {/* Header row with performance badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <GraduationCap size={22} color="var(--accent-blue)" />
                  </div>

                  {/* Highlighted Performance Badge */}
                  <div
                    style={{
                      textAlign: 'right',
                      padding: '0.45rem 0.95rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      border: '1px solid var(--accent-border)'
                    }}
                  >
                    <div className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                      {edu.performanceLabel}
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--accent-blue)', lineHeight: 1 }}>
                      {edu.performanceValue}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="text-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                    EDUCATION 0{index + 1}
                  </span>
                  <h3 className="display-h3" style={{ fontSize: '1.35rem', marginTop: '0.25rem', marginBottom: '0.4rem' }}>
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: '1.025rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {edu.institution}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
                    <MapPin size={13} color="var(--accent-blue)" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.925rem', marginTop: '1.25rem', lineHeight: '1.6' }}>
                  {edu.description}
                </p>
              </div>

              {/* Bottom Verification */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <Award size={15} color="var(--accent-blue)" />
                <span>Verified Academic Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
