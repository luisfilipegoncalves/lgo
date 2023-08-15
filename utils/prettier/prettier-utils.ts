import { Plugin } from "prettier";
import prettier from "prettier/standalone";
// TODO estree plugin should be loaded when printing JavaScript, TypeScript, Flow, or JSON.
import estreePlugin from "prettier/plugins/estree";

export const getPrettierParser = async (parserMode: string) => {
  let parserTool: Plugin | null = null;
  switch (parserMode) {
    case "json":
      parserTool = (await import("prettier/plugins/babel")).default;
      break;
    case "graphql":
      parserTool = (await import("prettier/plugins/graphql")).default;
      break;
    case "typescript":
      parserTool = (await import("prettier/plugins/typescript")).default;
      break;
    case "css":
      parserTool = (await import("prettier/plugins/postcss")).default;
      break;
    case "html":
      parserTool = (await import("prettier/plugins/html")).default;
      break;
    case "yaml":
      parserTool = (await import("prettier/plugins/yaml")).default;
      break;
    default:
      parserTool = (await import("prettier/plugins/babel")).default;
      break;
  }
  return parserTool;
};

export const parseInput = async (
  value: string,
  parserMode: string,
  parser: Plugin<any>
) => {
  if (!value) {
    return { text: "", error: "" };
  }

  try {
    const res = await prettier.format(value, {
      semi: false,
      parser: parserMode,
      plugins: [estreePlugin, parser],
    });

    return { text: res, error: "" };
  } catch (error) {
    return { text: value, error: error.message };
  }
};