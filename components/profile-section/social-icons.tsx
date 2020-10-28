import React from "react";
import styled from "styled-components";
import SVGIcon from "../common/svg-icon";
import { SVG } from "../../src/types/svgs";

const SocialDiv = styled.div`
  a {
    margin: 0 0.5rem;
  }
`;

const socialLinksData = [
  {
    title: "twitter",
    href: process.env.twitterProfile,
    svg: SVG.TWITTER,
  },
  {
    title: "github",
    href: process.env.githubProfile,
    svg: SVG.GITHUB,
  },
  {
    title: "linkedin",
    href: process.env.linkedinProfile,
    svg: SVG.LINKEDIN,
  },
];

const SocialIcons = () => {
  return (
    <SocialDiv>
      {socialLinksData.map((socialLink, index) => (
        <a
          key={index}
          href={socialLink.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVGIcon icon={socialLink.svg} />
        </a>
      ))}
    </SocialDiv>
  );
};

export default SocialIcons;
