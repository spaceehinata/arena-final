import React from "react";
import { Td } from "@chakra-ui/react";
export default function CustomTd({ children }) {
  return (
    <Td color="#FFF" px={[0, 2]} fontSize={["0.8em", "1em"]}>
      {children}
    </Td>
  );
}
