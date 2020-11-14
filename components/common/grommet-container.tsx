import { Grommet } from "grommet";
import React from "react";

interface GrommetContainerProps {
  children: React.ReactNode;
}

const GrommetContainer = (props: GrommetContainerProps) => {
  const { children } = props;
  return (
    <Grommet
      theme={{
        global: {
          colors: { border: "var(--white)" },
          focus: { border: { color: "var(--highlight)" } },
          elevation: { light: { medium: "0px 0px 8px var(--darkgrey)" } },
        },
      }}
    >
      {children}
    </Grommet>
  );
};

export default GrommetContainer;
