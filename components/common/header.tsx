import styled from "styled-components";

const HeaderStyle = styled.h1`
  font-weight: 700;
  color: var(--highlight);
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
