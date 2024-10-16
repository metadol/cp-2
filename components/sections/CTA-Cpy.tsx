"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ActionButton from "../common/Button";
import { DotBackgroundDemo } from "../blocks/dot-background";

const CTASection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    // triggerOnce: false,
    margin: "-100px 0px",
  });

  return (
    <div className="section pb-0">
      <section
        ref={sectionRef}
        className="section rounded-lg bg-gradient-to-b from-neutral-100 to-transparent py-20 text-black"
      >
        <div className="container mx-auto max-w-4xl px-4 text-center">
          {/* Smoothly animated heading */}
          <motion.h2
            className="mb-4 text-4xl font-medium leading-relaxed md:text-5xl md:leading-tight" // Added leading-relaxed for increased line height
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 50, filter: "blur(10px)" }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.span
              className="text-blue-500"
              initial={{ opacity: 0.8 }}
              animate={isInView ? { opacity: [0.8, 1, 0.8] } : { opacity: 0.8 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Automate finops
            </motion.span>{" "}
            and Take full control <br className="hidden md:block" />
            of your cloud cost now
          </motion.h2>

          {/* Smoothly animated subheading */}
          {/* <motion.p
          className="my-6 text-lg"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }} // Increased blur
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 50, filter: "blur(10px)" }
          }
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // Increased duration
        >
          Sign up now and start optimizing your expenses with our easy-to-use
          tool.
        </motion.p> */}

          {/* Smoothly animated button */}
          <motion.div
            className="py-8 text-center"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Increased blur
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 20, filter: "blur(10px)" }
            }
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }} // Increased duration
          >
            <ActionButton label="Get Started" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
