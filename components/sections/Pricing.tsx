import React from 'react';
import SectionHeader from '../common/SecctionHeader';
import { pricingPlans } from '../data/Sections';
import { FaCheck } from "react-icons/fa6";


const Pricing = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Pricing"
        description="Effortlessly integrate with your cloud infrastructure to enhance productivity and streamline your operations."
      />

<div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className=":border-gray-600 :bg-gray-800 :text-white mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className=":text-gray-400 font-light text-gray-500 sm:text-lg">
                {plan.description}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-semibold">
                  {plan.price}
                </span>
                <span className=":text-gray-400 text-gray-500">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features?.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <span className="flex gap-2">
                      <FaCheck className="text-green-500" />
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="hover:bg-primary-700 :ring-4 :ring-primary-200 :text-white ::ring-primary-900 mt-4 rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      
    </section>
  );
}

export default Pricing;
