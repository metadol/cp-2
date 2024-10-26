"use client"
import { cn } from "@/lib/utils";
import { featuresData } from "../data/Sections";
import { motion, useInView } from "framer-motion"; // Importing Framer Motion
import { useRef } from "react";
import { animationSpeed, isAnimationOnce } from "@/lib/config";

export function FeaturesSectionDemo() {
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {featuresData.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: isAnimationOnce }); // Set once to true

  return (
    <motion.div
      ref={ref} // Attach the ref to the motion div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and moved down
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
      transition={{
        duration: animationSpeed, // Increased duration for smoother entrance
        ease: [0.5, 0, 0.5, 1], // Smoother easing for gradual effect
        delay: index * 0.05, // Staggered delay based on index
      }}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-[500]">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm leading-normal text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </motion.div>
  );
};


