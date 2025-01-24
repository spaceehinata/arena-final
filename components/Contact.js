import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Container from "./Container";

export default function Contact() {
  const color = useColorModeValue("#05121B", "#FFF");

  const colorReverse = useColorModeValue("#FFF", "#05121B");
  const colorContact = useColorModeValue("#0A142F", "#0A142F");
  return (
    <Container py="3em">
      <Box
        width="100%"
        background={color}
        borderRadius="2em"
        position="relative"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
      >
        <Box
          pl="6.75em"
          alignSelf="center"
          width="80%"
          display={["none", "flex"]}
          flexDirection="column"
        >
          <Text fontSize="2.75em" fontWeight="700" color={colorReverse}>
            For partnerships, content creation
          </Text>
          <Text color={colorReverse} fontSize="1.25em" fontWeight="600">
            Interestingly, there is no limit to growing your skills in-game, and
            we ensure this by ranking you based on your skills and rewarding you
            with our token as you grow in skills.
          </Text>
        </Box>
        <Box
          position="relative"
          background={color}
          borderRadius={["1.25em", "2em"]}
          top={["0", "-2em"]}
          right={["0", "2em"]}
          filter="drop-shadow(0px 80px 105px rgba(51, 51, 51, 0.2))"
          color={colorReverse}
          padding={["1em", "2.5em"]}
          style={{
            animationName: "partner",
            animationIterationCount: "infinite",
            animationDuration: "5s",
          }}
        >
          <Text
            fontSize={["2em", "2.75em"]}
            textTransform="uppercase"
            textAlign="center"
          >
            Get in Touch
          </Text>
          <Input
            mt="2.5em"
            _placeholder={{ color: colorReverse }}
            border={`1.5px solid ${colorReverse} !important`}
            placeholder="Enter Your Name"
            p="1.5em 1em"
          ></Input>
          <Input
            mt="1em"
            _placeholder={{ color: colorReverse }}
            border={`1.5px solid ${colorReverse} !important`}
            placeholder="Enter Your Email"
            p="1.5em 1em"
          ></Input>
          <Textarea
            mt="1em"
            _placeholder={{ color: colorReverse }}
            border={`1.5px solid ${colorReverse} !important`}
            placeholder="Enter Your Email"
            p="1.5em 1em"
          ></Textarea>
          <Button
            bg="#C45260"
            mt="2.5em"
            width={["100%", "auto"]}
            color={color}
          >
            Get in touch
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
