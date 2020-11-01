import React from "react";
import styled from "styled-components";

const DescriptionStyle = styled.div`
  a {
    text-decoration: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;
    color: #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0;
  }

  a:hover {
    border-bottom: 1px solid #0000ff;
  }
`;

const IntroDescription = () => {
  return (
    <DescriptionStyle>
      <p>
        I'm an Engineering Manager passionate about leading, building, and
        motivating high-performing engineering teams. With more than 10 years of
        experience as a software engineer, I'm still eager to get my hands
        dirty with code. Lately, I have been playing around with ReactJS,
        TypeScript, and GraphQL.
      </p>
      <p>
        Currently, Tech Lead at{" "}
        <a
          href={"https://www.farfetch.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Farfetch
        </a>
        , working on authentication and authorization with{" "}
        <a
          href={"https://tools.ietf.org/html/rfc6749"}
          target="_blank"
          rel="noopener noreferrer"
        >
          OAuth 2.0
        </a>{" "}
        and{" "}
        <a
          href={"https://openid.net/connect"}
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenID Connect
        </a>
        .
      </p>
    </DescriptionStyle>
  );
};

export default IntroDescription;
