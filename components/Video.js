import { Box } from "@chakra-ui/react";
import React from "react";
import Container from "./Container";

export default function Video() {
  return (
    <Container pb="8.75em">
      <Box
        display="flex"
        justifyContent="center"
        background="linear-gradient(#05121B, #05121B) padding-box,linear-gradient(to right bottom, rgba(196, 82, 96, 1),rgba(196, 82, 96, 0), rgba(196, 82, 96, 0)) border-box"
        borderRadius="0.5em"
        border={["3px solid transparent", "8px solid transparent"]}
        width={["100%", "65%"]}
        height={["250px", "400px"]}
        mx="auto"
        filter="drop-shadow(10px 10px 100px rgba(186, 79, 92, 0.2))"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HDZNiz30cCM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Container>
  );
}
