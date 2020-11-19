import { Box, Button, Keyboard, TextArea } from "grommet";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { Plugin } from "prettier";
import prettier from "prettier/standalone";

import GrommetContainer from "../../components/common/grommet-container";
import Header from "../../components/common/header";
import ParserSelect from "../../components/prettier/parser-select";
import { Copy, TextAlignLeft } from "grommet-icons";
const copy = require("clipboard-copy");

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

const getParser = async (parserMode: string) => {
  let parserTool: Plugin | null = null;
  switch (parserMode) {
    case "json":
      parserTool = (await import("prettier/parser-babel")).default;
      break;
    case "graphql":
      parserTool = (await import("prettier/parser-graphql")).default;
      break;
    case "typescript":
      parserTool = (await import("prettier/parser-typescript")).default;
      break;
    case "css":
      parserTool = (await import("prettier/parser-postcss")).default;
      break;
    case "html":
      parserTool = (await import("prettier/parser-html")).default;
      break;
    case "yaml":
      parserTool = (await import("prettier/parser-yaml")).default;
      break;
    default:
      parserTool = (await import("prettier/parser-babel")).default;
      break;
  }
  return parserTool;
};

const parseInput = async (
  value: string,
  parserMode: string,
  parser: Plugin<any>
) => {
  if (!value) {
    return { text: "", error: "" };
  }

  try {
    const res = prettier.format(value, {
      semi: false,
      parser: parserMode,
      plugins: [parser],
    });

    return { text: res, error: "" };
  } catch (error) {
    return { text: value, error: error.message };
  }
};

const PrettierPage = () => {
  const router = useRouter();
  const [parserMode = "json"] = router.query?.params ?? [];

  const [inputValue, setInputValue] = useState("");
  const [parseError, setParseError] = useState("");

  const [parser, setParser] = useState<Plugin<any> | null>(null);

  useEffect(() => {
    async function loadParser() {
      const loadedParser = await getParser(parserMode);
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
                    console.error("Failed to load the prettier parser.");
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
