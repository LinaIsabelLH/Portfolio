import "@/styles/globals.css";
import React, { JSX, useEffect } from 'react';
import type { AppProps } from "next/app";
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component Component={Component} pageProps={pageProps} />;
};

export default App;