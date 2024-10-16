"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/SecctionHeader";
import { builtforAllData } from "../data/Sections";
import { DotBackgroundDemo } from "../blocks/dot-background";

const first = (
  <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
    {builtforAllData.map((feature, index) => {
      const IconComponent = feature.icon;
      return (
        <motion.div
          key={index}
          className="relative flex flex-col items-start space-y-4 rounded-2xl bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <IconComponent
            className="mb-2 text-indigo-600"
            size={32} // Using size prop for consistent icon sizing
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {feature.title}
          </h3>
        </motion.div>
      );
    })}
  </div>
);
const Built = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Built for all"
        description="CloudPositive fosters a cost-conscious culture with a FinOps-first approach, empowering informed decision-making and driving financial freedom in the cloud"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {builtforAllData.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <motion.div
              key={index}
              className="hover-card relative flex flex-col items-start space-y-4 rounded-2xl bg-white p-8 text-left transition-all duration-200 hover:bg-gradient-to-b hover:from-neutral-100 hover:to-transparent"
              // whileHover={{ rotate: 10 }}
            >
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ amount: 1 }}
                >
                <motion.div
                  initial={{ rotate: -10 }}
                  whileInView={{ rotate: 0 }} // Animate rotation every time it comes into view
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  <IconComponent
                    className="mb-1 text-gray-800"
                    width={24}
                    height={24}
                  />
                </motion.div>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800/90">
                {feature.title}
              </h3>
            </motion.div>
          );
        })}
      </div>
      {/* {first} */}
    </section>
  );
};

export default Built;
