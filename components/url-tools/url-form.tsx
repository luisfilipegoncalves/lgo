import { Box, TextArea } from "grommet";
import Link from "next/link";
import styled from "styled-components";
import Header from "../common/header";

interface URLFormProps {
  pageTitle: string;
  inputPlaceholder: string;
  inputValue: string;
  inputA11yTitle: string;
  outputPlaceholder: string;
  outputValue: string;
  outputA11yTitle: string;
  reverseToolUrl: string;
  reverseToolName: string;
  children?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  div {
    margin-top: 3rem;
  }

  a {
    padding-top: 3rem;
    align-self: flex-end;
  }
`;

const URLForm = (props: URLFormProps) => {
  const {
    pageTitle,
    inputPlaceholder,
    inputValue,
    inputA11yTitle,
    outputValue,
    outputPlaceholder,
    outputA11yTitle,
    reverseToolUrl,
    reverseToolName,
    onChange,
    children,
  } = props;
  return (
    <Wrapper>
      <Header value={pageTitle} />
      <Box align="center" elevation={"medium"}>
        <TextArea
          placeholder={inputPlaceholder}
          a11yTitle={inputA11yTitle}
          value={inputValue}
          resize={"vertical"}
          onChange={onChange}
        />
      </Box>
      <Box align="center" gap={"large"} elevation={"medium"}>
        <TextArea
          placeholder={outputPlaceholder}
          a11yTitle={outputA11yTitle}
          value={outputValue}
          resize={"vertical"}
          readOnly
        />
      </Box>
      <div>{children}</div>
      <Link href={reverseToolUrl}>{reverseToolName}</Link>
    </Wrapper>
  );
};

export default URLForm;
