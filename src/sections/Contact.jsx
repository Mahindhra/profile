import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending dispatch & construct mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open mailto with prefilled user inputs so recruiter can send instantly
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-muted)' }}>
      <div className="container">
        <SectionHeading
          number="09"
          eyebrow="GET IN TOUCH"
          title="Let's build something meaningful."
          description="I'm actively seeking opportunities to join a forward-thinking engineering team. Whether you have an open role, project question, or simply want to connect, feel free to reach out."
          rightMeta="DIRECT RECRUITER CONTACT"
        />

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '3.5rem', alignItems: 'start' }}>
          
          {/* Left Column: Direct verified contact channels */}
          <div>
            <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>DIRECT CHANNELS</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-meta" style={{ display: 'block', marginBottom: '0.2rem' }}>EMAIL ADDRESS</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover-line-draw"
                      style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-meta" style={{ display: 'block', marginBottom: '0.2rem' }}>PHONE NUMBER</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="hover-line-draw"
                      style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-meta" style={{ display: 'block', marginBottom: '0.2rem' }}>LOCATION</span>
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* GitHub Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-light)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Github size={18} />
                  </div>
                  <div>
                    <span className="text-meta" style={{ display: 'block', marginBottom: '0.2rem' }}>GITHUB REPOSITORY</span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-line-draw"
                      style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
                    >
                      github.com/{personalInfo.githubUsername}
                    </a>
                  </div>
                </div>

              </div>

              {/* Action Buttons row */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <Button
                  href={`mailto:${personalInfo.email}`}
                  variant="primary"
                  size="sm"
                  withArrow
                >
                  Send Direct Email
                </Button>

                <Button
                  href={personalInfo.resumePdf}
                  download="Doddi_Mahindhra_Resume.pdf"
                  variant="secondary"
                  size="sm"
                  isDownload
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Recruiter Message Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>MESSAGE TRANSMISSION</div>
            <h3 className="display-h4" style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>
              Send an inquiry directly
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-muted)',
                  border: '1px solid var(--accent-border)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent-blue)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="display-h4" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Opening Mail Client
                </h4>
                <p style={{ fontSize: '0.925rem', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Your message is formatted and being directed to <code>{personalInfo.email}</code>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className="form-input"
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jane@company.com"
                    className="form-input"
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Developer Opportunity"
                    className="form-input"
                  />
                  {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or opportunity details..."
                    className="form-textarea"
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? 'Formatting...' : 'Transmit Message'}
                  </Button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
