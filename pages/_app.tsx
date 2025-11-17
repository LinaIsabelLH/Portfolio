import "@/styles/globals.css";
import React, { JSX, useEffect } from "react";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import AOS from "aos";

import { LocaleProvider } from "../i18n/useLocale";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
};

export default App;
