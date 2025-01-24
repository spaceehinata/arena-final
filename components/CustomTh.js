import React from "react";
import { Th, useColorModeValue } from "@chakra-ui/react";
export default function CustomTh({ children, ...props }) {
  const colorReverse = useColorModeValue("#FFF", "#05121B");

  return (
    <Th
      fontWeight="900"
      color="#FFF"
      px={[0, 2]}
      fontSize={["0.6em", "1em"]}
      {...props}
    >
      {children}
    </Th>
  );
}
