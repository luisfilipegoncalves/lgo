import Section from "../common/sections";
import ExperienceList from "./experience-list";

const ExperienceSection = () => {
  return (
    <Section className={"experience"} title={"Experience"}>
      <ExperienceList />
    </Section>
  );
};

export default ExperienceSection;
