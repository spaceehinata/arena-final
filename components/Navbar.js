import { Box, Link } from "@chakra-ui/layout";
import React, { useState } from "react";
import Container from "./Container";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Button, Img, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Switch from "./Switch";
import useWindowSize from "../utils/useWindowSize";
const menu = {
  home: "Home",
  about: "About us",
  design: "Design concept",
  roadmap: "Roadmap",
  partners: "Partners",
};
export default function Navbar() {
  const { width } = useWindowSize();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const border = useColorModeValue("0px 4px 4px #F5F5F5", "none");

  return (
    <Container
      position="fixed"
      backgroundColor={"#FFF"}
      zIndex="9"
      boxShadow={border}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent={["space-between"]}
          width="100%"
        >
          <Button display={["flex", "none"]} onClick={() => setActive(true)}>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2747 2.58673H1.29561C0.575782 2.58673 0 2.01192 0 1.29336C0 0.574805 0.575802 0 1.29561 0H20.2747C20.9945 0 21.5703 0.574805 21.5703 1.29336C21.5943 2.01194 20.9945 2.58673 20.2747 2.58673Z"
                fill="#05121B"
              />
              <path
                d="M10.4853 9.34112H1.29561C0.575782 9.34112 0 8.76632 0 8.04776C0 7.32918 0.575802 6.75439 1.29561 6.75439H10.4853C11.2052 6.75439 11.781 7.3292 11.781 8.04776C11.805 8.74238 11.2292 9.34112 10.4853 9.34112Z"
                fill="#05121B"
              />
              <path
                d="M15.284 15.9998H1.29561C0.575782 15.9998 0 15.425 0 14.7064C0 13.9879 0.575802 13.4131 1.29561 13.4131H15.26C15.9799 13.4131 16.5556 13.9879 16.5556 14.7064C16.5796 15.425 16.0038 15.9998 15.284 15.9998H15.284Z"
                fill="#05121B"
              />
            </svg>
          </Button>
          <Link href="/">
            <Img
              loading="eager"
              alt="test"
              width="70px"
              height="70px"
              src="./logo.svg"
              objectFit="contain"
            />
          </Link>
          {(active || width >= 768) && (
            <Box
              display={[active ? "flex" : "none", "flex"]}
              zIndex="10"
              order={[3, 2]}
              position={["absolute", "relative"]}
              left="0"
              top="0"
              width={["100vw", "auto"]}
              height={["100vh", "auto"]}
              backgroundColor={["#0C1821", "#FFF"]}
              alignItems="center"
              justifyContent="center"
              py="2em"
              pl={["none", "5em"]}
              flexDirection={["column", "row"]}
              gap="2em"
              textDecoration="none !important"
            >
              <Button
                display={["flex", "none"]}
                onClick={() => setActive(false)}
                position="absolute"
                right="1.75em"
                top="1.75em"
              >
                <IoIosCloseCircleOutline color="white" size="2em" />
              </Button>
              {Object.keys(menu).map((key) => (
                <NextLink
                  href={
                    key === "whitepaper"
                      ? "https://drive.google.com/file/d/15y0zXMYYsKLTVZeGApapIDKnw4J4X_hV/view?usp=sharing"
                      : key === "deck"
                      ? "https://drive.google.com/file/d/1XVRxQTqd9h2_kf2dDj7KYOKoEx3CRpVe/view?usp=sharing"
                      : `/#${key}`
                  }
                  passHref
                  key={key}
                >
                  <Link
                    onClick={() => setActive(false)}
                    _hover={{ color: "#C45260" }}
                    color={
                      router.asPath.split("#")[1] === key
                        ? "#C45260"
                        : ["white", "black"]
                    }
                    fontWeight="600"
                    key={key}
                  >
                    {menu[key]}
                  </Link>
                </NextLink>
              ))}
              <Img
                loading="eager"
                display={["block", "none"]}
                mt="4em"
                height="9em"
                opacity="0.4"
                src="./nav-bottom.png"
              />
            </Box>
          )}

          <Box order={[2, 3]} display="flex" alignItems="center">
            <Switch
              onColor="#C45260"
              isOn={colorMode === "light"}
              handleToggle={toggleColorMode}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
