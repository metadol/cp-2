import React from "react";
import SectionHeader from "../common/SecctionHeader";
import { FeaturesSectionDemo } from "../blocks/feature-cards";

const Features = () => {
  return (
    <section className="section">
      <SectionHeader
        title="Features"
        description="Capabilities that drive total cloud cost control "
      />
      <FeaturesSectionDemo/>
    </section>
  );
};

export default Features;
