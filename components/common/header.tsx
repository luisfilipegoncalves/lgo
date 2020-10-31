import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  color: #0000ff;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

interface Props {
  value: string;
}

const Header = (props: Props) => {
  const { value = "" } = props;
  return <HeaderStyle>{value}</HeaderStyle>;
};

export default Header;
