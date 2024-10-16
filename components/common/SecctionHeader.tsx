import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string; // Pass text with `\n` for line breaks
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {

  return (
    <div className="my-8 text-center">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
};

export default SectionHeader;
