"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SecctionHeader";
import { builtforAllData } from "../data/Sections";

const Built2 = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Built for All"
        description="CloudPositive encourages a cost-effective, FinOps-first culture for informed cloud financial decisions."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {builtforAllData.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="hover-card relative flex flex-col items-start gap-4 rounded-2xl bg-white p-8 text-left transition-all duration-200 hover:bg-gradient-to-b hover:from-neutral-100 hover:to-transparent"
              initial={{ filter: "blur(5px)", opacity: 0 }} // Start with a blur and lower opacity
              whileInView={{ filter: "blur(0)", opacity: 1 }} // Clear blur and set opacity to 1
              transition={{
                type: "tween", // Use tween for smooth transitions
                duration: 1.2, // Increase duration for slower effect
                ease: [0.5, 0, 0.5, 1], // Custom easing function for smoothness
              }}
              viewport={{ once: false, amount: 0.8 }} // Trigger when 20% of the card is visible
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and moved down
                whileInView={{
                  opacity: 1, // Fade in to full opacity
                  y: 0, // Move to original position
                }}
                transition={{
                  type: "spring",
                  bounce: 0.4, // Slight bounce effect for lightness
                  duration: 0.8, // Duration for icon/text rise
                  delay: index * 0.2, // Increased staggering delay for each element
                }}
              >
                <IconComponent
                  className="mb-1 text-gray-800"
                  width={24}
                  height={24}
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and moved down
                whileInView={{
                  opacity: 1, // Fade in to full opacity
                  y: 0, // Move to original position
                }}
                transition={{
                  type: "spring",
                  bounce: 0.4, // Slight bounce effect for lightness
                  duration: 0.8, // Duration for icon/text rise
                  delay: index * 0.2, // Increased staggering delay for each element
                }}
                className="text-lg font-semibold text-gray-800/90"
              >
                {feature.title}
              </motion.h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Built2;
