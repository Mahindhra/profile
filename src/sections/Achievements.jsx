import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { leadershipAndActivities } from '../data/portfolioData';
import { Trophy, Users, Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const icons = {
  'lead-1': <Users size={22} color="var(--accent-blue)" />,
  'lead-2': <Calendar size={22} color="var(--accent-blue)" />,
  'lead-3': <TrendingUp size={22} color="var(--accent-blue)" />
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading
          number="07"
          eyebrow="DISTINCTION & INITIATIVE"
          title="Achievements and leadership."
          description="Demonstrated ownership, peer motivation, community engagement, and quantitative thinking."
          rightMeta="LEADERSHIP & INITIATIVE"
        />

        {/* Featured Hackathon Banner */}
        <div
          className="card card-featured"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div className="badge-status" style={{ marginBottom: '1rem' }}>
              <Trophy size={14} color="var(--accent-blue)" />
              <span>KEY RECOGNITION</span>
            </div>
            <h3 className="display-h3" style={{ fontSize: '1.75rem', marginBottom: '0.65rem' }}>
              Android Development Hackathon — Outstanding Participation
            </h3>
            <p style={{ fontSize: '1rem' }}>
              Commended for exceptional dedication, quick learning, and practical problem-solving across live multi-day project challenges.
            </p>
          </div>

          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center'
            }}
          >
            <div className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
              EVENT TIMELINE
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700 }}>
              30 Sep – 04 Oct 2024
            </div>
          </div>
        </div>

        {/* Leadership & Activities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {leadershipAndActivities.map((item) => (
            <div
              key={item.id}
              className="card card-hoverable"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
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
                  {icons[item.id]}
                </div>
                <div>
                  <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                    {item.category.toUpperCase()}
                  </span>
                  <h4 className="display-h4" style={{ fontSize: '1.15rem' }}>{item.title}</h4>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {item.points.map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                    <CheckCircle size={14} color="var(--accent-blue)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
