import React from 'react';

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  rightMeta,
  align = 'left'
}) {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : ''}`}>
      <div className="section-header-row">
        <div className="section-header-left">
          <div className="eyebrow">
            {number && <span className="eyebrow-number">{number} —</span>}
            <span>{eyebrow}</span>
          </div>
          <h2 className="display-section-title">{title}</h2>
          {description && <p className="lead-text" style={{ marginTop: '0.85rem' }}>{description}</p>}
        </div>
        {rightMeta && (
          <div className="section-header-meta">
            <span>{rightMeta}</span>
          </div>
        )}
      </div>
    </div>
  );
}
