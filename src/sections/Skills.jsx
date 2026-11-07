import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';
import { Code2, Layout, Database, Wrench, Sparkles, Terminal, ChevronRight } from 'lucide-react';

const categoryIcons = {
  programming: <Code2 size={20} color="var(--accent-blue)" />,
  frontend: <Layout size={20} color="var(--accent-blue)" />,
  database: <Database size={20} color="var(--accent-blue)" />,
  tools: <Wrench size={20} color="var(--accent-blue)" />,
  professional: <Sparkles size={20} color="var(--accent-blue)" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="TECHNICAL EXPERTISE"
          title="Tools and technologies I work with."
          description="Verified competencies across languages, web standards, databases, and development tooling."
          rightMeta="ARCHITECTURE & STACK"
        />

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem'
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-pill)' }}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`btn btn-sm ${activeTab === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid Dashboard */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="card card-hoverable"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem'
              }}
            >
              {/* Panel Header */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--bg-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {categoryIcons[category.id] || <Terminal size={20} />}
                    </div>
                    <div>
                      <h3 className="display-h4" style={{ fontSize: '1.15rem' }}>{category.title}</h3>
                      <span className="text-meta">{category.subtitle}</span>
                    </div>
                  </div>
                  <span className="text-meta" style={{ fontFamily: 'var(--font-mono)' }}>
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill List items with notes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1rem' }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        padding: '0.75rem 0.95rem',
                        backgroundColor: 'var(--bg-muted)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        transition: 'border-color var(--transition-fast)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.925rem' }}>
                          {skill.name}
                        </span>
                        <span className="tag tag-accent" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                          {skill.level}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.45' }}>
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span className="text-meta">Academic & Project Tested</span>
                <ChevronRight size={14} color="var(--accent-blue)" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
