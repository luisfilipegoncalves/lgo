import React from "react";
import { Box, Grommet, TextArea } from "grommet";
import Header from "../components/common/header";

const UrlDecoderPage = () => {
  const [value, setValue] = React.useState("");
  const [urlDecoded, setUrlDecoded] = React.useState("");

  return (
    <Grommet
      theme={{
        global: {
          colors: { border: "var(--white)" },
          focus: { border: { color: "var(--highlight)" } },
          elevation: { light: { xlarge: "0px 0px 16px var(--darkgrey)" } },
        },
      }}
    >
      <div>
        <Header value={"URL Decoder"} />
        <Box align="center" elevation={"xlarge"}>
          <TextArea
            placeholder="Type or paste your URL encoded input here..."
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setUrlDecoded(decodeURIComponent(event.target.value));
            }}
          />
        </Box>
        <br />
        <br />
        <Box align="center" gap={"large"} elevation={"xlarge"}>
          <TextArea
            placeholder="URL decoded output goes here..."
            value={urlDecoded}
            readOnly
          />
        </Box>
      </div>
    </Grommet>
  );
};

export default UrlDecoderPage;
