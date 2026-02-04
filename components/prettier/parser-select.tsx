import { Select } from "grommet";

const parserOptions = ["css", "typescript", "json", "graphql", "html", "yaml"];

interface ToolsSelectProps {
  parserMode: string;
  onChange?: (option: string) => void;
}

const ParserSelect = (props: ToolsSelectProps) => {
  const { onChange, parserMode = "json" } = props;
  return (
    <Select
      options={parserOptions}
      value={parserMode}
      onChange={({ option }) => {
        if (onChange) onChange(option);
      }}
    />
  );
};

export default ParserSelect;
