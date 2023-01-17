import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
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
      <Box w='100%' h='100%' bgGradient={['linear(to-r, #302b63,#24243e)', 'linear(to-r, #0f0c29,#302b63,#24243e)']} textColor='#00C89B'>
        <Container maxW={"container.lg"} h='100%' minH='100vh'>
          <Header />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

