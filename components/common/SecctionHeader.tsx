"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { animationSpeed, isAnimationOnce } from '@/lib/config';

interface SectionHeaderProps {
  title: string;
  description: string; // Pass text with `\n` for line breaks
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: isAnimationOnce, margin: '0px 0px -20% 0px' });

  return (
    <div ref={ref} className="my-8 text-center">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: animationSpeed, ease: 'easeOut' }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="section-description"
        initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: animationSpeed, delay: 0.2, ease: 'easeOut' }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
