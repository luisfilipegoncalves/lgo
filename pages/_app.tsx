import type { AppProps } from "next/app";
import SiteHead from "../components/site-head";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
