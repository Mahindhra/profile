import React from 'react';
import { ArrowUpRight, Download, ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  download = false,
  isExternal = false,
  withArrow = false,
  isDownload = false,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses = `btn btn-${variant} btn-${size} ${isDownload ? 'btn-download' : ''} ${className}`;

  const renderIcon = () => {
    if (isDownload) {
      return <Download size={16} className="btn-arrow-icon" />;
    }
    if (isExternal) {
      return <ArrowUpRight size={16} className="btn-arrow-icon" />;
    }
    if (withArrow) {
      return <ArrowRight size={16} className="btn-arrow-icon" />;
    }
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        download={download}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
