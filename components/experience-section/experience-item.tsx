import styled from "styled-components";

const ExperienceItemStyle = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  list-style-type: none;
  padding: 1rem 0;
  font-weight: 400;
  :not(:last-child) {
    border-bottom: 1px solid white;
  }

  span {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1.5fr 2fr;
  }
`;

const CompanyStyle = styled.a`
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  color: var(--white);
`;

interface ExperienceItemProps {
  company: string;
  date: string;
  role: string;
  website: string;
}

const ExperienceItem = (props: ExperienceItemProps) => {
  const { company, date, role, website } = props;
  return (
    <ExperienceItemStyle>
      <CompanyStyle href={website} target="_blank" rel="noopener noreferrer">
        {company}
      </CompanyStyle>
      <span>{role}</span>
      <span>{date}</span>
    </ExperienceItemStyle>
  );
};

export default ExperienceItem;
