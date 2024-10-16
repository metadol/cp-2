"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-effect";
import ActionButton from "../common/Button";

interface ContentProps {
  words: { text: string; className?: string }[]; // Define words as an array of objects
}

const Content: React.FC<ContentProps> = ({ words }) => (
  <section className="section max-w-4xl">
    <TypewriterEffect words={words} />
    <div className="py-8 text-center">
      <ActionButton label="Get Started" />
    </div>
  </section>
);

const Content2 = () => (
  <section className="section rounded-lg bg-gradient-to-b from-neutral-100 to-transparent py-20 text-black">
    <div className="container mx-auto max-w-3xl px-4 text-center">
      <h2 className="mb-4 text-4xl font-medium md:text-5xl">
        <span className="text-blue-500">Automate finops </span> and Take full
        control of your cloud cost now
      </h2>
      <p className="mb-6 text-lg">
        Sign up now and start optimizing your expenses with our easy-to-use
        tool.
      </p>
      <div className="py-8 text-center">
        <ActionButton label="Get Started" />
      </div>
    </div>
  </section>
);

const Cta = () => {
  const words = [
    {
      text: "Automate",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "FinOps",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
    },
    {
      text: "Take",
    },
    {
      text: "full",
    },
    {
      text: "control",
    },
    {
      text: "of",
    },
    {
      text: "your",
    },
    {
      text: "cloud",
    },
    {
      text: "cost",
    },
    {
      text: "now",
    },
  ];

  return (
    // <Content words={words} />
     <Content2 />
  );
};

export default Cta;
