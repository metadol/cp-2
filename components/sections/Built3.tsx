"use client"
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../common/SecctionHeader";
import { builtforAllData } from "../data/Sections";
import { isAnimationOnce } from "@/lib/config";

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
          const ref = useRef(null);
          const isInView = useInView(ref, { once: isAnimationOnce });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="hover-card relative flex flex-row items-end gap-2 space-y-4 rounded-2xl bg-white p-8 text-left transition-all duration-200 hover:bg-gradient-to-b hover:from-neutral-100 hover:to-transparent md:flex-col md:items-start md:gap-0"
              initial={{ opacity: 0, filter: "blur(10px)" }} // Initial blur effect
              animate={{
                opacity: isInView ? 1 : 0,
                filter: isInView ? "blur(0px)" : "blur(10px)", // Animate to visible
              }}
              transition={{
                duration: 0.6, // Duration of the animation
                ease: "easeOut", // Easing function for smoothness
                delay: index * 0.1, // Staggered delay for each card
              }}
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
