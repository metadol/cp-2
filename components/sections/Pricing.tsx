"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../common/SecctionHeader';
import { pricingPlans } from '../data/Sections';
import { FaCheck } from 'react-icons/fa6';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 }, // Start 20px lower
  visible: { 
    opacity: 1, 
    y: 0, // Move to the original position
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

const Pricing = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Pricing"
        description="Effortlessly integrate with your cloud infrastructure to enhance productivity and streamline your operations."
      />

      <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
        {pricingPlans.map((plan, index) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef, { once: false, margin: '-50px 0px' });

          return (
            <motion.div
              key={plan.title}
              ref={cardRef}
              className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
              initial="hidden"
              animate={isCardInView ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                {plan.description}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-semibold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features?.map((feature, featureIndex) => {
                  const featureRef = useRef(null);
                  const isFeatureInView = useInView(featureRef, { once: false, margin: '-20px 0px' });

                  return (
                    <motion.li
                      key={feature}
                      ref={featureRef}
                      className="flex items-center space-x-3"
                      initial="hidden"
                      animate={isFeatureInView ? 'visible' : 'hidden'}
                      variants={featureVariants}
                    >
                      <span className="flex gap-2">
                        <FaCheck className="text-green-500" />
                        {feature}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
              <a
                href="#"
                className="mt-4 rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
