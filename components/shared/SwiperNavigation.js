import { Box, Img } from "@chakra-ui/react";
import React from "react";

export default function SwiperNavigation({ ref, direction }) {
  return (
    <Box ref={ref}>
      <Img loading="lazy" src="./next.svg" />
    </Box>
  );
}
