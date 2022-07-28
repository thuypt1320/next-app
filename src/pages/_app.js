import React from "react";
import '../../styles/globals.css';
import PropTypes from "prop-types";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "src/theme";
import {ThemeProvider} from "@chakra-ui/core";

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
