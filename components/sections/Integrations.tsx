import React from "react";
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
        {integrations.map((integration, index) => (
          <div
            key={integration.id}
            className={`flex items-center rounded-lg border p-6 ${
              integration.comingSoon
                ? "bg-gray-100 border-gray-200"
                : "bg-white border-gray-200"
            }`}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
