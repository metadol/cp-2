"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../common/SecctionHeader";
import { integrations } from "../data/Sections";

const Integrations = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Integrations"
        description="Effortlessly integrate with your cloud infrastructure to enhance productivity and streamline your operations."
      />
      <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-3">
        {integrations.map((integration, index) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: false, margin: "-50px 0px" });

          return (
            <motion.div
              key={integration.id}
              ref={ref}
              className={`flex items-center rounded-lg border p-6 transition duration-300 ${
                integration.comingSoon
                  ? "bg-gray-100 border-gray-200"
                  : "bg-white border-gray-200"
              }`}
              initial={{ opacity: 0, filter: "blur(10px)" }} // Start with blur effect
              animate={
                isInView
                  ? { opacity: 1, filter: "blur(0px)" }
                  : { opacity: 0, filter: "blur(10px)" }
              } // Remove blur when in view
              transition={{
                duration: 0.8, // Longer duration for a smoother transition
                ease: "easeOut", // Smooth ease-out transition
                delay: index * 0.2, // Slight delay for each card
              }}
            >
              <div className="relative mr-4">
                <div
                  className={`transition duration-300 ${
                    integration.comingSoon ? "filter grayscale" : ""
                  }`}
                >
                  {integration.icon}
                </div>
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    integration.comingSoon ? "text-gray-500" : "text-black"
                  }`}
                >
                  {integration.name}
                </h3>
                {integration.comingSoon ? (
                  <span className="text-sm text-gray-400">Coming Soon</span>
                ) : (
                  integration.statusIcon
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Integrations;
