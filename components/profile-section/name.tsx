import styled from "styled-components";

const NameStyle = styled.span`
  font-weight: 700;
`;

const Name = () => {
  return <NameStyle>{process.env.fullName}</NameStyle>;
};

export default Name;
