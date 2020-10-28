import React from "react";
import styled from "styled-components";
import Intro from "../components/intro";
import Profile from "../components/profile";

const MainLayout = styled.div`
  /* display: flex;
  flex-direction: row; */
  /* flex-wrap: wrap; */

  .profile {
    //min-width: 12rem;
  }

  .intro {
    
  }
`;

export default function Home() {
  return (
    <MainLayout>
      <Profile />
      <Intro />
    </MainLayout>
  );
}
