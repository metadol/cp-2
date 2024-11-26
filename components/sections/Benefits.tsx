"use client";
import React from "react";
import SectionHeader from "../common/SecctionHeader";
import { motion } from "framer-motion";
import { benefitsData } from "../data/Sections";
import { MarqueeDemo } from "../ui/demo-marquee";

const firstColumn = benefitsData.slice(0, 3);
const secondColumn = benefitsData.slice(3, 6);
const thirdColumn = benefitsData.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: any;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, icon }: any) => (
            <div className="card" key={text}>
              <div>{icon}</div>
              <div>{text}</div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const Benefits = () => {
  return (
    <section className="section pt-0">
      <SectionHeader
        title="Transforming the traditional  cloud cost management ecosystem"
        description="Master cloud cost control by Automating Finops : Inform, Optimise, and Operate!"
      />
      <div className="mt-10 flex max-h-[738px] justify-center gap-8 overflow-hidden px-0 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] lg:px-20">
        <TestimonialsColumn
          testimonials={benefitsData}
          duration={100}
          className="block md:hidden"
        />
        <TestimonialsColumn
          testimonials={firstColumn}
          duration={15}
          className="hidden md:block"
        />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="hidden lg:block"
          duration={17}
        />
      </div>

      {/* <MarqueeDemo /> */}
    </section>
  );
};

export default Benefits;
