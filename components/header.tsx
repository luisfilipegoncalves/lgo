import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  text-align: left;
  font: normal normal normal 30px/39px Roboto Mono;
  letter-spacing: 0px;
  color: #0000ff;
`;

interface Props {
  value: string;
}

const Header = (props: Props) => {
  const { value = "" } = props;
  return <HeaderStyle>{value}</HeaderStyle>;
};

export default Header;
