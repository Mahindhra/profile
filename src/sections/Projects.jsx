import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { verifiedProjects } from '../data/portfolioData';
import { Trophy, Calendar, Sparkles, CheckCircle2, Smartphone, Terminal, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="SELECTED WORK"
          title="Turning ideas into practical experiences."
          description="Verified competitive engineering events and technical challenges."
          rightMeta="PROJECTS & CHALLENGES"
        />

        {/* Featured Project Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {verifiedProjects.map((project) => (
            <div
              key={project.id}
              className="card card-featured card-hoverable"
              style={{
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(2rem, 5vw, 4rem)',
                  alignItems: 'center'
                }}
              >
                
                {/* Left: Project Editorial Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span className="badge-status">
                      <Trophy size={14} color="var(--accent-blue)" />
                      <span>{project.award}</span>
                    </span>
                    <span className="tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} />
                      <span>{project.duration}</span>
                    </span>
                  </div>

                  <h3 className="display-h3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', marginBottom: '1rem' }}>
                    {project.title}
                  </h3>

                  <p className="lead-text" style={{ fontSize: '1.05rem', marginBottom: '1.75rem' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {project.outcomes.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle2 size={16} color="var(--accent-blue)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.925rem', color: 'var(--text-primary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag tag-accent">{tag}</span>
                    ))}
                  </div>

                  <div>
                    <Button
                      href="#contact"
                      variant="secondary"
                      size="md"
                      withArrow
                    >
                      Inquire About Engineering Skills
                    </Button>
                  </div>
                </div>

                {/* Right: Architectural Visual Preview Canvas */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '340px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {/* Decorative background grid inside card */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'radial-gradient(var(--border-strong) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                      opacity: 0.35,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Window chrome top */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    </div>
                    <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      event_record.log
                    </span>
                  </div>

                  {/* Center Visual Mock */}
                  <div style={{ textAlign: 'center', margin: '2rem 0', position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-light)',
                        border: '1px solid var(--accent-border)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-blue)',
                        marginBottom: '1rem'
                      }}
                    >
                      <Smartphone size={32} />
                    </div>
                    <div className="display-h4" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                      Android Development
                    </div>
                    <div className="text-meta">
                      Live Prototyping & Rapid Solution Sprint
                    </div>
                  </div>

                  {/* Bottom Verification Label */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                      VERIFIED ACHIEVEMENT
                    </span>
                    <span className="text-meta" style={{ fontSize: '0.75rem' }}>
                      Oct 2024
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
