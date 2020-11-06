import React from "react";
import Anchor from "../styles/anchor";

const IntroDescription = () => {
  return (
    <div>
      <p>
        I'm an Engineering Manager passionate about leading, building, and
        motivating high-performing engineering teams. With more than 10 years of
        experience as a software engineer, I'm still eager to get my hands dirty
        with code. Lately, I have been playing around with ReactJS, TypeScript,
        and GraphQL.
      </p>
      <p>
        Currently, Tech Lead at{" "}
        <Anchor
          href={"https://www.farfetch.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Farfetch
        </Anchor>
        , working on authentication and authorization with{" "}
        <Anchor
          href={"https://tools.ietf.org/html/rfc6749"}
          target="_blank"
          rel="noopener noreferrer"
        >
          OAuth 2.0
        </Anchor>{" "}
        and{" "}
        <Anchor
          href={"https://openid.net/connect"}
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenID Connect
        </Anchor>
        .
      </p>
    </div>
  );
};

export default IntroDescription;
