import styled from "styled-components";
import { SVG } from "../../types/svgs";
import SVGIcon from "../common/svg-icon";

const SocialDiv = styled.div`
  margin: 0.75rem 0;
  a {
    margin: 0 0.5rem;
  }
`;

const socialLinksData = [
  {
    testId: "twitter",
    title: "twitter",
    href: process.env.twitterProfile,
    svg: SVG.TWITTER,
  },
  {
    testId: "github",
    title: "github",
    href: process.env.githubProfile,
    svg: SVG.GITHUB,
  },
  {
    testId: "linkedin",
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
          data-cy={socialLink.testId}
        >
          <SVGIcon icon={socialLink.svg} />
        </a>
      ))}
    </SocialDiv>
  );
};

export default SocialIcons;
