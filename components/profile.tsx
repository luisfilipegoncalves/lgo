import React from "react";
import styled from "styled-components";
import Name from "./name";
import RoleStyle from "./role";
import SocialIcons from "./social-icons";

const ProfileStyle = styled.div`
  flex-grow: 1;
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
