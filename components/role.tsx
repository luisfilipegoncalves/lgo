import styled from "styled-components";

const RoleStyle = styled.p`
  font: normal normal normal 20px/26px Roboto Mono;
  letter-spacing: 0px;
  color: #e0e0e0;
`;

const Role = () => {
  return <RoleStyle>{process.env.role}</RoleStyle>;
};

export default Role;
