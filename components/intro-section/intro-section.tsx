import React from "react";
import Header from "../common/header";
import IntroDescription from "./intro-description";

const IntroSection = () => {
  return (
    <div className={"intro"}>
      <Header value={"Hello!"} />
      <IntroDescription />
    </div>
  );
};

export default IntroSection;
