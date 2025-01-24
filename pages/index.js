import { Box } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/provider";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/react";
import Discover from "../components/Discover";
import About from "../components/About";

import Design from "../components/Design";
import Roadmap from "../components/Roadmap";
import theme from "../theme.conf";
import { ColorModeScript } from "@chakra-ui/react";
import Main from "../components/Main";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import Advisors from "../components/Advisors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 50px;
    height: 25px;
    background: #05121b;
    border-radius: 50px;
    position: relative;
    transition: background-color 0.2s;
  }

  .react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 1 px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 30px;
  }
  @keyframes jump {
    0%,
    100% {
      transform: translateY(-1em);
    }
    50% {
      transform: translateY(1em);
    }
  }

  @keyframes partner {
    0%,
    100% {
      transform: translateY(-0.2em);
    }
    50% {
      transform: translateY(0.4em);
    }
    30% {
      transform: translateY(0.5em);
    }
  }

  @keyframes jump2 {
    0%,
    100% {
      transform: translateY(-0.8em);
    }
    50% {
      transform: translateY(0.5em);
    }
    30% {
      transform: translateY(0.8em);
    }
  }
  .swiper-thumbs {
    margin-top: 1em;
  }
  .swiper-button-next {
    background-image: url(./next.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
  }

  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev {
    background-image: url(./prev.svg);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
  }

  .swiper-button-prev::after {
    display: none;
  }
`;

export default function Home() {
  const router = useRouter();

  const homeRef = useRef();
  const aboutRef = useRef();
  const designRef = useRef();
  const roadmapRef = useRef();
  const tokenomicsRef = useRef();
  const teamRef = useRef();
  const partnersRef = useRef();

  useEffect(() => {
    switch (router.asPath.split("#")[1]) {
      case "about":
        aboutRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        break;
      case "design":
        designRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        break;
      case "roadmap":
        roadmapRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        break;
      case "tokenomics":
        tokenomicsRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        break;
      case "team":
        teamRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        break;
      case "partners":
        partnersRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        break;

      default:
        homeRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Arena</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Global styles={GlobalStyles} />
      <Main>
        <Navbar />
        <Discover homeRef={homeRef} />
        <About aboutRef={aboutRef} />

        <Design designRef={designRef} />
        <Roadmap roadmapRef={roadmapRef} />
        <Tokenomics tokenomicsRef={tokenomicsRef} />
        <Team teamRef={teamRef} />
        <Partners partnersRef={partnersRef} />
        <Advisors />
        <Contact />
        <Footer />
      </Main>
    </ChakraProvider>
  );
}
