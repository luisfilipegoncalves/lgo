import styled from "styled-components";
import Name from "./name";
import RoleStyle from "./role";
import SocialIcons from "./social-icons";

const ProfileSectionStyle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 0.6rem;
  }
`;

const ProfileSection = () => {
  return (
    <ProfileSectionStyle className={"profile"}>
      <Name />
      <RoleStyle />
      <SocialIcons />
    </ProfileSectionStyle>
  );
};

export default ProfileSection;
