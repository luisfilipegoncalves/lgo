import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Anchor from "../styles/anchor";

const ToolsStyle = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;

  li {
    margin: 1rem 0;

    p {
      color: #bebdbd;
    }
  }
`;

const tools = [
  {
    href: "/urldecoder",
    name: "URL Decoder",
    description: "Tool to decode a Uniform Resource Identifier (URI).",
  },
  {
    href: "/urlencoder",
    name: "URL Encoder",
    description:
      "Tool to encode a Uniform Resource Identifier (URI) by replacing each instance of certain characters by sequences representing the UTF-8 encoding of the character.",
  },
  {
    href: "/json",
    name: "JSON Formatter and Validator",
    description: "Tool to validate, format and beautify JSON data",
  },
];

const ToolList = () => {
  return (
    <ToolsStyle>
      {tools.map((tool, index) => (
        <li key={index}>
          <Link href={tool.href}>
            <Anchor>{tool.name}</Anchor>
          </Link>
          <p>{tool.description}</p>
        </li>
      ))}
    </ToolsStyle>
  );
};

export default ToolList;
