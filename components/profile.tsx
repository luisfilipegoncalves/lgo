import React from "react";
import styled from "styled-components";
import Name from "./name";
import RoleStyle from "./role";
import SocialIcons from "./social-icons";

const ProfileStyle = styled.div``;

const Profile = () => {
  return (
    <ProfileStyle>
      <Name />
      <RoleStyle />
      <SocialIcons />
    </ProfileStyle>
  );
};

export default Profile;
