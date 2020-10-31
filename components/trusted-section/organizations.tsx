import React from "react";
import Image from "next/image";
import styled from "styled-components";

const OrganizationsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  align-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 2.5rem;
  }

  img {
    min-height: 1rem;
  }

  .euronext {
    min-height: 2.5rem;
  }

  .vicomtech {
    min-height: 1.5rem;
  }

  .edigma {
    min-height: 1.25rem;
  }
`;

const organizations = [
  {
    src: "/organizations/euronext.svg",
    alt: "Euronext",
    width: 160,
    height: 60,
    className: "euronext",
  },
  {
    src: "/organizations/farfetch.svg",
    alt: "Farfetch",
    width: 180,
    height: 60,
  },
  {
    src: "/organizations/taikai.svg",
    alt: "Taikai",
    width: 140,
    height: 60,
    className: "taikai"
  },
  {
    src: "/organizations/vicomtech.svg",
    alt: "VicomTech",
    width: 160,
    height: 60,
    className: "vicomtech",
  },
  {
    src: "/organizations/edigma.svg",
    alt: "Edigma",
    width: 140,
    height: 60,
    className: "edigma",
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
          className={org.className}
          unsized
        />
      ))}
    </OrganizationsStyle>
  );
};

export default Organizations;
