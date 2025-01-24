import {
  Box,
  useColorModeValue,
  Link,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import {
  FaDiscord,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Container from "./Container";

export default function Footer() {
  const color = useColorModeValue("#FFF", "#05121B");
  const colorR = useColorModeValue("#05121B", "#FFF");

  return (
    <Container>
      <Box
        display="flex"
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        pb="3em"
        alignItems="center"
        gridGap={["3.75em", "0"]}
      >
        <Box>
          <Text textAlign={["center", "left"]} pb={["1.5em", "0.5em"]}>
            Join our community{" "}
          </Text>
          <Box display="flex" gridGap="1.25em">
            <Box
              as={Link}
              href="https://www.reddit.com/user/ArenaMasterToken"
              bg={colorR}
              borderRadius="100%"
              width="3em"
              height="3em"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaRedditAlien color={color} size="1em" />
            </Box>
            <Box
              as={Link}
              href="https://t.me/ArenaMasters"
              bg={colorR}
              borderRadius="100%"
              width="3em"
              height="3em"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaTelegramPlane color={color} size="1em" />
            </Box>
            <Box
              as={Link}
              href="https://twitter.com/arenamastergame"
              bg={colorR}
              borderRadius="100%"
              width="3em"
              height="3em"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaTwitter color={color} size="1em" />
            </Box>
            <Box
              as={Link}
              href="https://medium.com/@ArenaMasterGame"
              bg={colorR}
              borderRadius="100%"
              width="3em"
              height="3em"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaDiscord color={color} size="1em" />
            </Box>
          </Box>
        </Box>
        <Text order={[3, 2]} alignSelf={["center", "flex-end"]}>
          © 2022 Arena. All rights reserved.{" "}
        </Text>
        <Box order={[2, 3]}>
          <Text textAlign={["center", "left"]} pb={["1.5em", "0.5em"]}>
            Subscribe to our newsletter
          </Text>
          <InputGroup>
            <Input
              _placeholder={{ color: color }}
              bg={colorR}
              color={color}
              border={`1.5px solid ${colorR} !important`}
              placeholder="Enter Your Email"
              p="1.5em 1em"
              pr="12em"
            ></Input>
            <InputRightElement width="5em">
              <Button
                h="3.2em"
                bg="#C45260"
                mt="0.7em"
                color="#FFF"
                onClick={() => {}}
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Container>
  );
}
