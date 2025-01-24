import { Box } from "@chakra-ui/layout";
import React from "react";

export default function Container({ children, ...rest }) {
  return (
    <Box width="100%" {...rest}>
      <Box maxWidth={["100%", "80em"]} mx={["1em", "auto"]}>
        {children}
      </Box>
    </Box>
  );
}
