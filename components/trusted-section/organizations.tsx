import React from "react";
import Image from "next/image";
import styled from "styled-components";

const OrganizationsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
`;

const organizations = [
  {
    src: "/organizations/farfetch.svg",
    alt: "Farfetch",
    width: 180,
    height: 60,
  },
  {
    src: "/organizations/euronext.svg",
    alt: "Euronext",
    width: 160,
    height: 60,
  },
  {
    src: "/organizations/vicomtech.svg",
    alt: "VicomTech",
    width: 160,
    height: 60,
  },
  {
    src: "/organizations/taikai.svg",
    alt: "Taikai",
    width: 140,
    height: 60,
  },
  {
    src: "/organizations/edigma.svg",
    alt: "Edigma",
    width: 140,
    height: 60,
  },
];

const Organizations = () => {
  return (
    <OrganizationsStyle>
      {organizations.map((org, index) => (
        <Image
          key={index}
          src={org.src}
          alt={org.alt}
          width={org.width}
          height={org.height}
        />
      ))}
    </OrganizationsStyle>
  );
};

export default Organizations;
