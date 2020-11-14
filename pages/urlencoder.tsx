import React, { useState } from "react";
import GrommetContainer from "../components/common/grommet-container";
import URLForm from "../components/url-tools/url-form";

const UrlEncoderPage = () => {
  const [urlInputValue, setUrlInputValue] = useState("");
  const urlEncoded = encodeURIComponent(urlInputValue);

  return (
    <GrommetContainer>
      <URLForm
        pageTitle={"URL Encoder"}
        inputPlaceholder={"Type or paste your URL input here..."}
        inputValue={urlInputValue}
        inputA11yTitle={"textarea to paste url"}
        outputPlaceholder={"URL encoded output goes here..."}
        outputValue={urlEncoded}
        outputA11yTitle={"read-only textarea for encoded url"}
        reverseToolName={"URL Decoder Tool"}
        reverseToolUrl={"/urldecoder"}
        onChange={(event) => {
          setUrlInputValue(event.target.value);
        }}
      />
    </GrommetContainer>
  );
};

export default UrlEncoderPage;
