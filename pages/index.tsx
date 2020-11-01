import React from "react";
import styled from "styled-components";
import IntroSection from "../components/intro-section/intro-section";
import ProfileSection from "../components/profile-section/profile-section";
import TrustedBySection from "../components/trusted-section/trusted-section";

const MainLayout = styled.div`
  padding: 2rem 6rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;

  .profile {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 3fr;

    .profile {
      justify-self: center;
    }
  }
`;

export default function Home() {
  return (
    <MainLayout>
      <ProfileSection />
      <div>
        <IntroSection />
        <TrustedBySection />
      </div>
    </MainLayout>
  );
}
