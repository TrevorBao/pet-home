import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import studioTheme from "./ui-components/studioTheme";

Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
