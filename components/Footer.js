import {
  Box,
  useColorModeValue,
  Link,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
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

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const toast = useToast();

  const handleEmailChange = (e) => setEmail(e.target.value);

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError(""); // Clear the error
    setIsSubscribed(true);
    setEmail(""); // Clear the email input

    toast({
      title: "Subscription Successful",
      description: "You have successfully subscribed to our newsletter!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

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
              _hover={{ bg: "#FF4500" }} // Hover effect for Reddit icon
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
              _hover={{ bg: "#0088cc" }} // Hover effect for Telegram icon
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
              _hover={{ bg: "#1DA1F2" }} // Hover effect for Twitter icon
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
              _hover={{ bg: "#7289da" }} // Hover effect for Discord icon
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

          <FormControl isInvalid={!!emailError}>
            <InputGroup>
              <Input
                value={email}
                onChange={handleEmailChange}
                _placeholder={{ color: color }}
                bg={colorR}
                color={color}
                border={`1.5px solid ${colorR} !important`}
                placeholder="Enter Your Email"
                p="1.5em 1em"
                pr="12em"
              />
              <InputRightElement width="5em">
                <Button
                  h="3.2em"
                  bg="#C45260"
                  mt="0.7em"
                  color="#FFF"
                  onClick={handleSubscribe}
                  isDisabled={isSubscribed} // Disable button if already subscribed
                  _hover={{ bg: "#9E3F4B" }} // Hover effect for subscribe button
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{emailError}</FormErrorMessage>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
}
