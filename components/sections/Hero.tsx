"use client";
import { motion } from "framer-motion";
import { DotBackgroundDemo } from "../blocks/dot-background";
import { AnimatedShinyTextDemo } from "../common/ShinyText";
import ActionButton from "../common/Button";
const phrases = [
  "Streamline Your Cloud Strategy with Complete Visibility.",
  "Empower Total Control of Your Cloud Resources.",
  "Take Charge of Your Cloud Journey with Unrivaled Insight.",
  "Navigate the Cloud Landscape with Confidence and Control.",
  "Harness the Power of Full Visibility in Your Cloud Strategy.",
  "Empower Your Organization to Control Cloud Costs Effectively.",
  "Maximize Efficiency with Strategic Cloud Control.",
  "Lead Your Cloud Management with Comprehensive Oversight.",
  "Transform How You Manage the Cloud with Total Control.",
  "Empower Your Team to Achieve Cloud Control Excellence.",
  "Optimize Cloud Spending with Strategic Control and Clarity.",
  "Seize the Opportunity: Master Your Cloud Strategy Today.",
  "Helping companies to take full control of their cloud cost",
  "Take full control of your cloud cost",
];

const Hero = () => {
  return (
    <DotBackgroundDemo>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <section className="flex flex-1 flex-col items-center justify-center pb-[100px] pt-[100px] text-center">
          <div>
            <AnimatedShinyTextDemo />
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5, // Delay for the heading
              duration: 1,
              ease: "easeInOut",
            }}
            className="animate-shimmer relative z-10 mx-auto mt-6 max-w-6xl bg-gradient-to-r from-gray-500 via-black to-gray-500 bg-clip-text text-2xl font-semibold leading-tight text-transparent md:text-4xl lg:text-7xl lg:leading-tight"
          >
            {phrases[12]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1, // Delay for the description to appear after the heading
              duration: 1,
              ease: "easeInOut",
            }}
            className="dark:black/20 lea\ relative z-10 mx-auto mt-6 max-w-3xl text-base text-black/60 md:text-xl md:leading-normal"
          >
            A completely FinOps-driven solution for cloud cost governance,
            optimization, and management. Fine-tune your cloud resources,
            people, and processes for better cloud ROI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5, // Delay for the buttons to appear after the description
              duration: 1,
              ease: "easeInOut",
            }}
            className="mt-8 flex flex-col gap-4 md:flex-row"
          >
            <ActionButton label="Request Demo to Know More" />
            <ActionButton label="Talk with Founders" variant="secondary" />
          </motion.div>
        </section>
      </motion.div>
    </DotBackgroundDemo>
  );
};

export default Hero;