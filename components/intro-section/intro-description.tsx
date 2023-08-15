import React from "react";
import Anchor from "../styles/anchor";

const IntroDescription = () => {
  return (
    <div>
      <p>
        I'm a Senior Software Engineer passionate about all things frontend, crypto, finance and leadership. With more than 14 years of
        experience as a software engineer, I'm still eager to get my hands dirty with code. Lately, I have been playing around with ReactJS, TypeScript,
        and GraphQL.
      </p>
      <p>
        Currently, Senior Frontend Engineer at{" "}
        <Anchor
          href={"https://anchorage.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Anchorage Digital
        </Anchor>
        , working on a regulated crypto platform for institutions.
      </p>
    </div>
  );
};

export default IntroDescription;
