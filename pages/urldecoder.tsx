import React from "react";
import { Box, Grommet, TextArea } from "grommet";
import Header from "../components/common/header";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem;
  div {
    margin-top: 3rem;
  }
`;

const UrlDecoderPage = () => {
  const [value, setValue] = React.useState("");
  const [urlDecoded, setUrlDecoded] = React.useState("");

  return (
    <Grommet
      theme={{
        global: {
          colors: { border: "var(--white)" },
          focus: { border: { color: "var(--highlight)" } },
          elevation: { light: { medium: "0px 0px 8px var(--darkgrey)" } },
        },
      }}
    >
      <Wrapper>
        <Header value={"URL Decoder"} />
        <Box align="center" elevation={"medium"}>
          <TextArea
            placeholder="Type or paste your URL encoded input here..."
            a11yTitle="textared to paste encoded url"
            value={value}
            resize={"vertical"}
            onChange={(event) => {
              setValue(event.target.value);
              setUrlDecoded(decodeURIComponent(event.target.value));
            }}
          />
        </Box>
        <Box align="center" gap={"large"} elevation={"medium"}>
          <TextArea
            placeholder="URL decoded output goes here..."
            a11yTitle="textarea for decoded url"
            value={urlDecoded}
            resize={"vertical"}
            readOnly
          />
        </Box>
      </Wrapper>
    </Grommet>
  );
};

export default UrlDecoderPage;
