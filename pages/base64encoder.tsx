import React, { useState } from "react";
import GrommetContainer from "../components/common/grommet-container";
import URLForm from "../components/url-tools/url-form";
import { encodeToBase64 } from "../utils/prettier/base64/base64-utils";

const Base64EncoderPage = () => {
  const [inputValue, setInputValue] = useState("");
  const encodedValue = encodeToBase64(inputValue);

  return (
    <GrommetContainer>
      <URLForm
        pageTitle={"Base 64 Encoder"}
        inputPlaceholder={"Type or paste your text to encode here..."}
        inputValue={inputValue}
        inputA11yTitle={"textarea to paste content to encode"}
        outputPlaceholder={"Encoded output goes here..."}
        outputValue={encodedValue}
        outputA11yTitle={"read-only textarea for encoded output"}
        reverseToolName={"Base 64 Decoder"}
        reverseToolUrl={"/base64decoder"}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
    </GrommetContainer>
  );
};

export default Base64EncoderPage;
