import React from "react";
import Section from "../common/sections";
import IntroDescription from "./intro-description";

const IntroSection = () => {
  return (
    <Section className={"intro"} title={"Hello!"}>
      <IntroDescription />
    </Section>
  );
};

export default IntroSection;
