import React from "react";
import styled from "styled-components";

const SVGStyle = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: var(--white);
  transition: 0.2s;

  &:hover {
    fill: var(--highlight);
  }
`;

interface Props {
  icon: string;
}

const SVGIcon = (props: Props) => {
  const { icon } = props;
  return (
    <SVGStyle>
      <path d={icon} />
    </SVGStyle>
  );
};
export default SVGIcon;
