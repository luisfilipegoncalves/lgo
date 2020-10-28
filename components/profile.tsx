import React from "react";
import styled from "styled-components";
import Name from "./name";
import RoleStyle from "./role";
import SocialIcons from "./social-icons";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 0.6rem;
  }
`;

const Profile = () => {
  return (
    <ProfileStyle className={"profile"}>
      <Name />
      <RoleStyle />
      <SocialIcons />
    </ProfileStyle>
  );
};

export default Profile;
