import { Box, Img } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function Paper() {
  return (
    <Container py="8.75em">
      <Box
        filter="drop-shadow(0px 0px 200px rgba(1, 107, 160, 0.5))"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        gap="2.5em"
        justifyItems="center"
      >
        <Link
          passHref={true}
          target="_blank"
          href="https://drive.google.com/file/d/15y0zXMYYsKLTVZeGApapIDKnw4J4X_hV/view?usp=sharing"
        >
          <Img
            loading="lazy"
            _hover={{
              filter: "drop-shadow( 0px 0px 14px #C45260)",
            }}
            cursor="pointer"
            transition="300ms all ease-in-out"
            src="./whitepaper.svg"
          />
        </Link>
        <Link
          passHref={true}
          target="_blank"
          href="https://drive.google.com/file/d/1_JlYHmCVSApI53EYvZX6creW7G5fEJaB/view?usp=sharing"
        >
          <Img
            loading="lazy"
            _hover={{
              filter: "drop-shadow( 0px 0px 14px #C45260)",
            }}
            cursor="pointer"
            transition="300ms all ease-in-out"
            src="./deck.svg"
          />
        </Link>
      </Box>
    </Container>
  );
}
