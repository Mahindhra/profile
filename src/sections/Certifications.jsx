import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/portfolioData';
import { FileCheck, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          number="06"
          eyebrow="CREDENTIALS"
          title="Certifications and continuous learning."
          description="Industry and academic certifications validating technical proficiency, system productivity, and international communication standards."
          rightMeta="STANDARDS & PROFICIENCY"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="card card-hoverable"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
              }}
            >
              <div>
                {/* Header Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
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
                    <FileCheck size={22} color="var(--accent-blue)" />
                  </div>
                  <span className="text-meta" style={{ fontFamily: 'var(--font-mono)' }}>0{index + 1}</span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <span className="tag tag-accent" style={{ fontSize: '0.75rem', marginBottom: '0.65rem' }}>
                    {cert.focus}
                  </span>
                  <h3 className="display-h4" style={{ fontSize: '1.25rem', marginTop: '0.45rem', marginBottom: '0.25rem' }}>
                    {cert.title}
                  </h3>
                  <div className="text-meta">
                    Issuing Authority: {cert.issuer}
                  </div>
                </div>

                {/* Verified Competencies */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '1.25rem' }}>
                  {cert.skills.map((skill, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={14} color="var(--accent-blue)" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom verification badge */}
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
                <ShieldCheck size={16} color="var(--accent-blue)" />
                <span>Verified Resume Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
