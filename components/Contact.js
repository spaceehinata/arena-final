import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "./Container";

export default function Contact() {
  const color = useColorModeValue("#05121B", "#FFF");
  const colorReverse = useColorModeValue("#FFF", "#05121B");
  const colorContact = useColorModeValue("#0A142F", "#0A142F");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
    if (!message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic here
      console.log("Form submitted:", { name, email, message });
    }
  };

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
          as="form"
          onSubmit={handleSubmit}
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

          <FormControl isInvalid={errors.name} mt="2.5em">
            <FormLabel color={colorReverse}>Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              _placeholder={{ color: colorReverse }}
              border={`1.5px solid ${colorReverse} !important`}
              placeholder="Enter Your Name"
              p="1.5em 1em"
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email} mt="1em">
            <FormLabel color={colorReverse}>Email</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              _placeholder={{ color: colorReverse }}
              border={`1.5px solid ${colorReverse} !important`}
              placeholder="Enter Your Email"
              p="1.5em 1em"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.message} mt="1em">
            <FormLabel color={colorReverse}>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              _placeholder={{ color: colorReverse }}
              border={`1.5px solid ${colorReverse} !important`}
              placeholder="Enter Your Message"
              p="1.5em 1em"
            />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            bg="#C45260"
            mt="2.5em"
            width={["100%", "auto"]}
            color={color}
            _hover={{
              backgroundColor: "#F39C97",
              transform: "scale(1.05)",
            }}
            _active={{
              backgroundColor: "#C45260",
              transform: "scale(0.95)",
            }}
          >
            Get in touch
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
