import { Plugin } from "prettier";
import prettier from "prettier/standalone";

export const getPrettierParser = async (parserMode: string) => {
    let parserTool: Plugin | null = null;
    switch (parserMode) {
      case "json":
        parserTool = (await import("prettier/parser-babel")).default;
        break;
      case "graphql":
        parserTool = (await import("prettier/parser-graphql")).default;
        break;
      case "typescript":
        parserTool = (await import("prettier/parser-typescript")).default;
        break;
      case "css":
        parserTool = (await import("prettier/parser-postcss")).default;
        break;
      case "html":
        parserTool = (await import("prettier/parser-html")).default;
        break;
      case "yaml":
        parserTool = (await import("prettier/parser-yaml")).default;
        break;
      default:
        parserTool = (await import("prettier/parser-babel")).default;
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
      const res = prettier.format(value, {
        semi: false,
        parser: parserMode,
        plugins: [parser],
      });
  
      return { text: res, error: "" };
    } catch (error) {
      return { text: value, error: error.message };
    }
  };