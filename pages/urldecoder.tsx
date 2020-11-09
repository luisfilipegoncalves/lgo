import React, { useState } from "react";
import QueryParams, { QueryParam } from "../components/url-tools/query-params";
import URLForm from "../components/url-tools/url-form";

const getQueryParams = (urlDecoded: string) => {
  if (!urlDecoded) return [];

  try {
    const url = new URL(urlDecoded);
    const searchParams = url.searchParams;
    const queryParams: QueryParam[] = [];
    for (const [key, value] of searchParams.entries()) {
      queryParams.push({ key, value });
    }
    return queryParams;
  } catch (_e) {
    return [];
  }
};

const UrlDecoderPage = () => {
  const [urlInputValue, setUrlInputValue] = useState("");
  const urlDecoded = decodeURIComponent(urlInputValue);
  const queryParams = getQueryParams(urlDecoded);
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
    >
      <QueryParams params={queryParams} />
    </URLForm>
  );
};

export default UrlDecoderPage;
