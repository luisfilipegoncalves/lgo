import React from "react";
import Header from "../common/header";
import Section from "../common/sections";
import Organizations from "./organizations";

const TrustedBySection = () => {
  return (
    <Section className={"trusted"}>
      <Header value={"Trusted By"} />
      <Organizations />
    </Section>
  );
};

export default TrustedBySection;
