import React from "react";
import ForexForm from "./ForexForm";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Define a custom theme with global styles
const theme = extendTheme({
  styles: {
    global: {
      // Applies to the entire body
      body: {
        bg: "#111", // Set the background color to black
        color: "white", // Set the default font color to white
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <ForexForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
