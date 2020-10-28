import React from "react";
import Header from "../common/header";
import Organizations from "./organizations";

const TrustedBySection = () => {
  return (
    <div className={"trusted"}>
      <Header value={"Trusted By"} />
      <Organizations />
    </div>
  );
};

export default TrustedBySection;
