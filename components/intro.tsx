import React from "react";
import styled from "styled-components";
import Header from "./header";
import IntroDescription from "./intro-description";

const IntroStyle = styled.div``;

const Intro = () => {
  return (
    <IntroStyle className={"intro"}>
      <Header value={"Header!"} />
      <IntroDescription />
    </IntroStyle>
  );
};

export default Intro;
