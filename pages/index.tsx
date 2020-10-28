import React from "react";
import styled from "styled-components";
import IntroSection from "../components/intro-section/intro-section";
import ProfileSection from "../components/profile-section/profile-section";
import TrustedBySection from "../components/trusted-section/trusted-section";

const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <MainLayout>
      <ProfileSection />
      <IntroSection />
      <TrustedBySection />
    </MainLayout>
  );
}
