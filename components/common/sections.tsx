import React from "react";
import styled from "styled-components";
import Header from "./header";

const SectionStyle = styled.div`
  :not(:first-child) {
    margin-top: 6rem;
  }
`;

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const Section = (props: SectionProps) => {
  const { className = "", title = "", children } = props;
  return (
    <SectionStyle className={className}>
      <Header value={title} />
      {children}
    </SectionStyle>
  );
};

export default Section;
