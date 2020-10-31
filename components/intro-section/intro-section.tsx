import React from "react";
import Header from "../common/header";
import Section from "../common/sections";
import IntroDescription from "./intro-description";

const IntroSection = () => {
  return (
    <Section className={"intro"}>
      <Header value={"Hello!"} />
      <IntroDescription />
    </Section>
  );
};

export default IntroSection;
