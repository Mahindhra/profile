import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInterests } from '../data/portfolioData';
import { Music, Utensils, Palette, PenTool } from 'lucide-react';

const interestIcons = {
  'Playing Piano': <Music size={22} color="var(--accent-blue)" />,
  'Cooking': <Utensils size={22} color="var(--accent-blue)" />,
  'Painting': <Palette size={22} color="var(--accent-blue)" />,
  'Drawing': <PenTool size={22} color="var(--accent-blue)" />
};

export default function Interests() {
  return (
    <section id="interests" className="section">
      <div className="container">
        <SectionHeading
          number="08"
          eyebrow="BEYOND THE CODE"
          title="Beyond the screen."
          description="Disciplines outside software development that nurture patience, sensory detail, visual composition, and creativity."
          rightMeta="CREATIVE DIVERSIFICATION"
        />

        <div className="grid-4col">
          {personalInterests.map((interest) => (
            <div
              key={interest.name}
              className="card card-hoverable"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {interestIcons[interest.name]}
              </div>

              <div>
                <span className="text-meta" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                  {interest.category.toUpperCase()}
                </span>
                <h4 className="display-h4" style={{ fontSize: '1.15rem', marginTop: '0.2rem', marginBottom: '0.35rem' }}>
                  {interest.name}
                </h4>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
