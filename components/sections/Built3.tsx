"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SecctionHeader";
import { builtforAllData } from "../data/Sections";

const Built3 = () => {
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
              className="hover-card relative flex flex-row items-end gap-2 space-y-4 rounded-2xl bg-white p-8 text-left transition-all duration-200 hover:bg-gradient-to-b hover:from-neutral-100 hover:to-transparent md:flex-col md:items-start md:gap-0"
              initial={{ opacity: 0, filter: "blur(10px)" }} // Initial blur effect
              whileInView={{ opacity: 1, filter: "blur(0px)" }} // Remove blur
              transition={{
                duration: 0.6, // Duration of the animation
                ease: "easeOut", // Easing function for smoothness
                delay: index * 0.1, // Staggered delay for each card
              }}
              viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the card is in view
            >
              <div className="relative">
                <IconComponent
                  className="mb-1 text-gray-800"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800/90">
                {feature.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Built3;
