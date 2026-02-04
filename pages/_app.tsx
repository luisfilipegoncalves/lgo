import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { type DefaultTheme, ThemeProvider } from "styled-components";
import SiteHead from "../components/common/site-head";
import GlobalStyle from "../components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SiteHead />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
