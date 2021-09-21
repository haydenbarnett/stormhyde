import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { AnimatePresence } from "framer-motion";
import theme from "@foundation";
import { GlobalStyles, TransitionLayout, Header, Footer } from "@components";

function App({ Component, pageProps, router }: AppProps) {
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
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <TransitionLayout key={router.route}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </TransitionLayout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
