import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { Img, Button, useColorModeValue } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function Discover({ homeRef }) {
  const buttonBorder = useColorModeValue("2px solid #0A1E3F", "2px solid #FFF");
  const color = useColorModeValue("#0A1E3F", "#FFF");
  const reverseColor = useColorModeValue("#FFF", "#0A1E3F");

  return (
    <Box
      ref={homeRef}
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        width={["100%", "40%"]}
        textAlign={["center", "center"]}
        margin="auto"
        padding={["1em", "auto"]}
      >
        <Text
          textAlign={["left", "center"]}
          fontSize={["2.5em", "3em", "4em", "4em"]}
          fontWeight="900"
          textTransform="uppercase"
          width={["50%", "auto"]}
        >
          Arena awaits you,{" "}
          <Box
            as="span"
            color="#C45260
"
          >
            MY LORD
          </Box>
        </Text>
        <Text
          textAlign={["left", "center"]}
          fontSize={["1em", "1.25rem"]}
          fontWeight="400"
        >
          Fight to Earn <br></br>
          Arena Master - tokenized battle-style game combining Play-to-Win &
          Play-to-Earn modes
        </Text>
        <Link passHref={true} href={"/#about"}>
          <Button
            mt={["10em", "3.75em"]}
            px="2em"
            borderRadius="0.25em"
            overflow="hidden"
            border={buttonBorder}
            bg="transparent"
            height="3.75em"
          >
            <Text fontWeight="900">Discover more</Text>
            <Box
              alignSelf="center"
              height="100%"
              position="relative"
              right="-2em"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="4em"
              bg={color}
            >
              <MdKeyboardArrowRight size="2em" color={reverseColor} />
            </Box>
          </Button>
        </Link>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gridGap="1em"
          position="absolute"
          width={["100%", "auto"]}
          px="1.5em"
          bottom="1em"
          left="50%"
          transform="translateX(-50%)"
        >
          <Link
            passHref={true}
            href="https://apps.apple.com/us/app/arena-master/id1527871139"
          >
            <Img
              loading="lazy"
              target="_blank"
              height="100%"
              width="12em"
              src="./appstore.svg"
            />
          </Link>
          <Link
            passHref={true}
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.Sambrela.ArenaMaster&hl=en&gl=US"
          >
            <Img loading="lazy" height="100%" src="./googleplay.svg" />
          </Link>
        </Box>
      </Box>
      <Box
        display={["block", "block"]}
        position="absolute"
        left={["-1em", "0"]}
        bottom={["11vh", "0px"]}
      >
        <Img
          loading="lazy"
          _hover={{
            cursor: "pointer",
            filter: "drop-shadow(0px 0px 50px rgba(196, 82, 96, 0.3))",
          }}
          transition="300ms all ease"
          filter="drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.3))"
          height={["20vh", "60vh"]}
          src="./african.png"
        />
      </Box>
      <Box
        display={["block", "block"]}
        position="absolute"
        right="0"
        top={["20vh", "auto"]}
        bottom={["auto", "0px"]}
      >
        <Img
          loading="lazy"
          _hover={{
            cursor: "pointer",
            filter: "drop-shadow(0px 0px 50px rgba(159, 221, 251, 0.3))",
          }}
          transition="300ms all ease"
          filter="drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.3))"
          height={["30vh", "60vh"]}
          src="./spartan.png"
        />
      </Box>
    </Box>
  );
}
