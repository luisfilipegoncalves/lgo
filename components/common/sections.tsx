import React from "react";
import styled from "styled-components";

const SectionStyle = styled.div`
  :not(:first-child) {
    margin-top: 5rem;
  }
`;

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const { className = "", children } = props;
  return <SectionStyle className={className}>{children}</SectionStyle>;
};

export default Section;
