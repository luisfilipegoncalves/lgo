import React from "react";
import Section from "../common/sections";
import Organizations from "./organizations";

const TrustedBySection = () => {
  return (
    <Section className={"trusted"} title={"Trusted By"}>
      <Organizations />
    </Section>
  );
};

export default TrustedBySection;
