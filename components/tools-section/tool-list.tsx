import Link from "next/link";
import styled from "styled-components";

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
    href: "/prettier",
    name: "Prettier Formatter and Validator",
    description:
      "Tool to validate, format and beautify your data ( JSON, yaml, css, html, typescript, graphql )",
  },
  {
    href: "/base64decoder",
    name: "Base 64 Decoder",
    description: "Tool to decode data from Base64 format",
  },
  {
    href: "/base64encoder",
    name: "Base 64 Encoder",
    description: "Tool to encode data to Base64 format",
  },
];

const ToolList = () => {
  return (
    <ToolsStyle>
      {tools.map((tool, index) => (
        <li key={index}>
          <Link href={tool.href}>{tool.name}</Link>
          <p>{tool.description}</p>
        </li>
      ))}
    </ToolsStyle>
  );
};

export default ToolList;
