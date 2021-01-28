import React, { useState } from "react";
import GrommetContainer from "../components/common/grommet-container";
import URLForm from "../components/url-tools/url-form";
import { decodeFromBase64 } from "../utils/prettier/base64/base64-utils";

const Base64DecoderPage = () => {
  const [inputValue, setInputValue] = useState("");
  const encodedValue = decodeFromBase64(inputValue);

  return (
    <GrommetContainer>
      <URLForm
        pageTitle={"Base 64 Decoder"}
        inputPlaceholder={"Type or paste your text to decode here..."}
        inputValue={inputValue}
        inputA11yTitle={"textarea to paste content to decode"}
        outputPlaceholder={"Decoded output goes here..."}
        outputValue={encodedValue}
        outputA11yTitle={"read-only textarea for decoded output"}
        reverseToolName={"Base 64 Encoder"}
        reverseToolUrl={"/base64encoder"}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
    </GrommetContainer>
  );
};

export default Base64DecoderPage;
