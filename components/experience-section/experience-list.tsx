import React from "react";
import styled from "styled-components";
import ExperienceItem from "./experience-item";

const ExperienceListStyle = styled.ul`
  padding-inline-start: 0;
`;

const experienceList = [
  {
    company: "Farfetch",
    role: "Engineering Lead",
    date: "2019 - Present",
    website: "https://www.farfetch.com/",
  },
  {
    company: "TAIKAI",
    role: "VP of Engineering",
    date: "2018 - 2019",
    website: "https://taikai.network",
  },
  {
    company: "Euronext",
    role: "Tech Lead",
    date: "2016 - 2018",
    website: "https://www.euronext.com",
  },
  {
    company: "Edigma",
    role: "Software Engineer",
    date: "2010 - 2016",
    website: "https://edigma.com",
  },
  {
    company: "VicomTech",
    role: "Software Engineer",
    date: "2009",
    website: "http://vicomtech.org",
  },
];

const ExperienceList = () => {
  return (
    <ExperienceListStyle>
      {experienceList.map((experienceItem, index) => (
        <ExperienceItem {...experienceItem} key={index} />
      ))}
    </ExperienceListStyle>
  );
};

export default ExperienceList;
