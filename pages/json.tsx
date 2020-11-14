import { Box, Keyboard, TextArea } from "grommet";
import { useState } from "react";
import styled from "styled-components";
import GrommetContainer from "../components/common/grommet-container";
import Header from "../components/common/header";

const JSONEditorStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;

const parseInput = (value: string) => {
  if (!value) {
    return { text: "", error: "" };
  }

  try {
    const parseddInput = JSON.parse(value);
    const convertedInput = JSON.stringify(parseddInput, null, 2);
    return { text: convertedInput, error: "" };
  } catch (error) {
    return { text: value, error: error.message };
  }
};

const JSONEditor = () => {
  const [inputValue, setInputValue] = useState("");
  const [parseError, setParseError] = useState("");

  return (
    <GrommetContainer>
      <Keyboard
        onTab={(event) => {
          event.preventDefault();
        }}
      >
        <JSONEditorStyle>
          <Header value={"JSON Formatter and Validator"} />
          <Box align="center" elevation={"medium"} flex={"grow"}>
            <TextArea
              placeholder={`{\n  "past": "json text here"\n}`}
              a11yTitle={"JSON Text"}
              value={inputValue}
              fill
              onChange={(event) => {
                const { text, error } = parseInput(event.target.value);
                setInputValue(text);
                setParseError(error);
              }}
            />
          </Box>
          {parseError && <ErrorMessage>Error: {parseError}</ErrorMessage>}
        </JSONEditorStyle>
      </Keyboard>
    </GrommetContainer>
  );
};

export default JSONEditor;
