import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import SiteHead from '../components/common/site-head'
import { Analytics } from '@vercel/analytics/react';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SiteHead />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  )
}
