import Section from "../common/sections";
import ToolList from "./tool-list";

const ToolsSection = () => {
  return (
    <Section className={"tools"} title={"Tools"}>
      <ToolList />
    </Section>
  );
};

export default ToolsSection;
