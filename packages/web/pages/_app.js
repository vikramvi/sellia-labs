import React from "react";
import App from "next/app";
import { GlobalStyles } from "core/static/global.style";
import { ThemeProvider } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@redq/reuse-modal/lib/index.css";
import "rc-slider/assets/index.css";

import { theme } from "../theme";

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
