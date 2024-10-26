"use client";
import React, { useRef, useState } from "react";
import SectionHeader from "../common/SecctionHeader";
import { accordionData } from "../data/Sections";
import { FaAngleDown } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { isAnimationOnce } from "@/lib/config";

const accordionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Faq = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<
    number | null
  >(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordionIndex(index === activeAccordionIndex ? null : index);
  };
  return (
    <section className="section">
      <SectionHeader
        title="FAQ"
        description="Effortlessly integrate with your cloud infrastructure to enhance productivity and streamline your operations."
      />

      {accordionData.map((item, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: isAnimationOnce, margin: "-50px 0px" });

        return (
          <motion.div
            key={index}
            ref={ref}
            className="mx-auto max-w-4xl border-b border-gray-200 py-3"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={accordionVariants}
          >
            <h2>
              <button
                className="flex w-full items-center justify-between py-2 text-left text-lg font-semibold"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordionIndex === index}
                aria-controls={`accordion-text-${index}`}
              >
                <span>{item.question}</span>
                <FaAngleDown
                  className={`transition-all duration-300 ease-in-out ${
                    activeAccordionIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h2>
            <div
              id={`accordion-text-${index}`}
              role="region"
              aria-labelledby={`accordion-title-${index}`}
              className={`grid text-base text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                activeAccordionIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-3">{item.answer}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Faq;
