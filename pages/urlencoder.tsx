import React, { useState } from "react";
import URLForm from "../components/url-form/url-form";

const UrlEncoderPage = () => {
  const [urlInputValue, setUrlInputValue] = useState("");
  const urlEncoded = encodeURIComponent(urlInputValue);

  return (
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
  );
};

export default UrlEncoderPage;
