import React from "react";

interface Props {
  fill?: string;
  icon: string;
}

const SVGIcon = (props: Props) => {
  const { fill = "#E0E0E0", icon } = props;
  return (
    <svg
      viewBox="0 0 32 32"
      style={{ width: "2rem", height: "2rem", fill: "#41505e" }}
    >
      <path style={{ fill: fill }} d={icon} />
    </svg>
  );
};
export default SVGIcon;
