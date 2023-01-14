import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import Header from "../components/Header";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={"container.lg"}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
