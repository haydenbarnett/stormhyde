import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "@foundation";
import { GlobalStyles, Header, Footer } from "@components";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="https://stormhyde.com/opengraph.png"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
