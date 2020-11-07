import { Table, TableBody, TableCell, TableHeader, TableRow } from "grommet";
import React, { useState } from "react";
import URLForm from "../components/url-form/url-form";

interface QueryParam {
  key: string;
  value: string;
}

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
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Param
            </TableCell>
            <TableCell scope="col" border="bottom">
              Value
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {queryParams.map((query, index) => (
            <TableRow key={index}>
              <TableCell scope="row">
                <strong>{query.key}</strong>
              </TableCell>
              <TableCell>{query.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </URLForm>
  );
};

export default UrlDecoderPage;
