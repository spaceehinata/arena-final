import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";

export default function TokenItem({ src, text }) {
  return (
    <Box display="flex">
      <Box display="flex" alignItems="center" height="100%">
        <Img
          loading="lazy"
          src={src}
          dropShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        />
      </Box>

      <Text alignSelf="center" pl="1.5em" fontWeight="600">
        {text}
      </Text>
    </Box>
  );
}
