import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: none;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  cursor: pointer;
  color: var(--white);
  border-bottom: 1px solid var(--white);
  padding-bottom: 0;

  :hover {
    border-bottom: 1px solid var(--highlight);
  }
`;

export default Anchor;
