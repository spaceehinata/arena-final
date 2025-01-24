import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Main({ children }) {
  const bg = useColorModeValue("#FFF", "#05121B");
  return (
    <Box overflow="hidden" bg={bg}>
      {children}
    </Box>
  );
}
