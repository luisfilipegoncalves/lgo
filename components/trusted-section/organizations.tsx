import Image from "next/image";
import styled from "styled-components";

const OrganizationsStyle = styled.div`
  --square: 130px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--square), 1fr));
  grid-column-gap: 30px;
  align-items: center;

  > div {
    width: var(--square);
    height: calc(var(--square) / 2);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const organizations = [
  {
    src: "/organizations/anchoragedigital.svg",
    alt: "Anchorage Digital",
  },
  {
    src: "/organizations/farfetch.svg",
    alt: "Farfetch",
  },
  {
    src: "/organizations/taikai.svg",
    alt: "TAIKAI",
  },
  {
    src: "/organizations/euronext.svg",
    alt: "Euronext",
  },
  {
    src: "/organizations/edigma.svg",
    alt: "Edigma",
  },
  {
    src: "/organizations/vicomtech.svg",
    alt: "VicomTech",
  },
];

const Organizations = () => {
  return (
    <OrganizationsStyle>
      {organizations.map((org, index) => (
        <Image key={index} src={org.src} alt={org.alt} width={130} height={60} />
      ))}
    </OrganizationsStyle>
  );
};

export default Organizations;
