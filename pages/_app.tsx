import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "@foundation";
import { GlobalStyles, Header, Footer } from "@components";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
