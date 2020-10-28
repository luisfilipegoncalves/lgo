import React from "react";
import styled from "styled-components";

const IntroDescriptionStyle = styled.p`
  text-align: left;
  font: normal normal normal 20px/37px Roboto Mono;
  letter-spacing: 0px;
  color: #e0e0e0;
`;

const IntroDescription = () => {
  return (
    <IntroDescriptionStyle>
      Next, please. I think we need a rematch. Yeah well look, Marvin, Marvin,
      you gotta play. See that’s where they kiss for the first time on the dance
      floor. And if there’s no music, they can’t dance, and if they can’t dance,
      they can’t kiss, and if they can’t kiss, they can’t fall in love and I’m
      history.
    </IntroDescriptionStyle>
  );
};

export default IntroDescription;
