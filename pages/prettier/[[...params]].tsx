import { Box, Button, Keyboard, TextArea } from "grommet";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { Plugin } from "prettier";
import { Copy, TextAlignLeft } from "grommet-icons";
import copy from "clipboard-copy";

import GrommetContainer from "../../components/common/grommet-container";
import Header from "../../components/common/header";
import ParserSelect from "../../components/prettier/parser-select";
import {
  parseInput,
  getPrettierParser,
} from "../../utils/prettier/prettier-utils";

const PrettierEditorStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;

const OptionsStyle = styled.div`
  margin: 1rem 0;
`;

const PrettierPage = () => {
  const router = useRouter();
  const [parserMode = "json"] = router.query?.params ?? [];

  const [inputValue, setInputValue] = useState("");
  const [parseError, setParseError] = useState("");

  const [parser, setParser] = useState<Plugin<any> | null>(null);

  useEffect(() => {
    async function loadParser() {
      const loadedParser = await getPrettierParser(parserMode);
      setParser(loadedParser);
    }
    loadParser();
  }, [parserMode]);

  return (
    <GrommetContainer>
      <Keyboard
        onTab={(event) => {
          event.preventDefault();
        }}
      >
        <PrettierEditorStyle>
          <Header value={"Prettier - Formatter and Validator"} />
          <OptionsStyle>
            <Box direction={"row"} gap={"medium"}>
              <ParserSelect
                parserMode={parserMode}
                onChange={(option) => {
                  Router.push(`/prettier/${option}`);
                }}
              />
              <Button
                label="Format"
                icon={<TextAlignLeft size="medium" color="var(--white)" />}
                disabled={!inputValue}
                onClick={async () => {
                  if (!parser) {
                    setParseError("Failed to load the prettier parser.");
                    return;
                  }
                  const { text, error } = await parseInput(
                    inputValue,
                    parserMode,
                    parser
                  );
                  setInputValue(text);
                  setParseError(error);
                }}
              />
              <Button
                label="Copy"
                icon={<Copy size="medium" color="var(--white)" />}
                disabled={!inputValue}
                onClick={() => {
                  copy(inputValue);
                }}
              />
            </Box>
          </OptionsStyle>
          <Box align="center" elevation={"medium"} flex={"grow"}>
            <TextArea
              placeholder={`past your data here`}
              value={inputValue}
              fill
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
          </Box>
          {parseError && <ErrorMessage>Error: {parseError}</ErrorMessage>}
        </PrettierEditorStyle>
      </Keyboard>
    </GrommetContainer>
  );
};

export default PrettierPage;
