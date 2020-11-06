import React, { useState } from "react";
import URLForm from "../components/url-form/url-form";

const UrlDecoderPage = () => {
  const [urlInputValue, setUrlInputValue] = useState("");
  const urlDecoded = decodeURIComponent(urlInputValue);

  return (
    <URLForm
      pageTitle={"URL Decoder"}
      inputPlaceholder={"Type or paste your encoded URL input here..."}
      inputValue={urlInputValue}
      inputA11yTitle={"textarea to paste encoded url"}
      outputPlaceholder={"URL decoded output goes here..."}
      outputValue={urlDecoded}
      outputA11yTitle={"read-only textarea for decoded url"}
      reverseToolName={"URL Encoder tool"}
      reverseToolUrl={"/urlencoder"}
      onChange={(event) => {
        setUrlInputValue(event.target.value);
      }}
    />
  );
};

export default UrlDecoderPage;
