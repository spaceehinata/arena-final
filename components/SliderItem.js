import { Box, Img, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useWindowSize from "../utils/useWindowSize";

export default function SliderItem({ src, text }) {
  const { width } = useWindowSize();
  return (
    <Box position="relative">
      <Img loading="lazy" src={src} />
      <Box
        position="absolute"
        color="#FFF"
        transform={["translateX(-50%)", "translateY(50%)"]}
        left={["50%", "2.5em"]}
        bottom={["0.5em", "50%"]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="80%"
        alignItems={["center", "flex-start"]}
      >
        <Text
          fontSize={["1em", "2.5em"]}
          fontWeight="700"
          textTransform="uppercase"
          pb={["0.2em", "1.5em"]}
          filter="drop-shadow(0px 0px 5px rgba(5, 18, 27, 0.8))"
        >
          {text}
        </Text>
        <Box display="flex" gap="1em">
          <Link
            target="_blank"
            passHref={true}
            href="https://apps.apple.com/us/app/arena-master/id1527871139"
          >
            <Img loading="lazy" height={["2em", "5em"]} src="./appstore.svg" />
          </Link>
          <Link
            passHref={true}
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.Sambrela.ArenaMaster&hl=en&gl=US"
          >
            <Img
              loading="lazy"
              height={["2em", "5em"]}
              src="./googleplay.svg"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
