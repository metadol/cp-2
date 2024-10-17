"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SecctionHeader";
import { builtforAllData } from "../data/Sections";

const Built = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Built for all"
        description="CloudPositive fosters a cost-conscious culture with a FinOps-first approach, empowering informed decision-making and driving financial freedom in the cloud."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {builtforAllData.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="hover-card relative flex flex-row items-end gap-2 space-y-4 rounded-2xl bg-white p-8 text-left transition duration-200 hover:bg-gradient-to-b hover:from-neutral-100 hover:to-transparent md:flex-col md:items-start md:gap-0"
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }} // Initial state: blurry and moved down
              whileInView={{
                opacity: 1,
                y: 0, // Final position
                filter: "blur(0px)", // Clear blur at the same time
              }}
              transition={{
                type: "spring", // Using spring physics for a more natural effect
                stiffness: 80, // Adjust stiffness for a good bounce
                damping: 20, // Adjust damping for smoothness
                delay: index * 0.1, // Staggered delay based on index
              }}
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the card is visible
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

export default Built;
