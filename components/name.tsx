import styled from "styled-components";

const NameStyle = styled.p`
  font: normal normal normal 20px/26px Roboto Mono;
  letter-spacing: 0px;
  color: #e0e0e0;
`;

const Name = () => {
return <NameStyle>{process.env.fullName}</NameStyle>;
};

export default Name;
