import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experienceTimeline } from '../data/portfolioData';
import { Cloud, Brain, CheckCircle, Building2, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="PROFESSIONAL JOURNEY"
          title="Learning through experience."
          description="Verified internship experiences delivering hands-on exposure to cloud infrastructure and AI algorithms."
          rightMeta="PRACTICAL EXPOSURE"
        />

        {/* Timeline Container */}
        <div
          className="timeline-container"
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            padding: '1rem 0'
          }}
        >
          {/* Vertical Architectural Line */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              bottom: '24px',
              left: '32px',
              width: '2px',
              backgroundColor: 'var(--border-strong)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experienceTimeline.map((item, index) => (
              <div
                key={item.id}
                className="timeline-item"
                style={{
                  position: 'relative',
                  paddingLeft: '80px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Timeline Marker Icon */}
                <div
                  className="timeline-marker"
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '0',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-surface)',
                    border: '2px solid var(--accent-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                    zIndex: 1
                  }}
                >
                  <span className="text-mono" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)' }}>
                    0{index + 1}
                  </span>
                </div>

                {/* Timeline Content Card */}
                <div className="card card-hoverable" style={{ padding: '2rem' }}>
                  
                  {/* Top Bar: Role & Organization */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                        <span className="tag tag-accent">{item.duration}</span>
                        <span className="text-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Building2 size={13} />
                          {item.organization}
                        </span>
                      </div>
                      <h3 className="display-h3" style={{ color: 'var(--text-primary)', marginTop: '0.35rem' }}>
                        {item.role}
                      </h3>
                    </div>

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
                      {item.id === 'exp-1' ? (
                        <Cloud size={22} color="var(--accent-blue)" />
                      ) : (
                        <Brain size={22} color="var(--accent-blue)" />
                      )}
                    </div>
                  </div>

                  {/* Primary Description */}
                  <p className="lead-text" style={{ fontSize: '1rem', marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                    {item.highlights.map((point, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle size={15} color="var(--accent-blue)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                    {item.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
