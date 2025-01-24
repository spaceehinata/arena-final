import {
  Box,
  Img,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Container from "./Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const first = [
  "Lite Paper",
  "White Paper",
  "Smart Contract",
  "Contract Audit",
  "New HUD",
  "Seed Round",
];
const firstU = ["Private Round"];
const second = [
  "Public Sale",
  "Obtain Coingecko Listing",
  "Obtain Coinmarketcap Listing",
  "Centralized exchange Listing",
  "Game Launch On GameXChange",
  "Game Currency Integration",
];

const third = [
  "NFT Marketplace and NFT Rewards",
  "NFT Pair Staking/Forming",
  "NFT Asset Games Integration",
  "Single Asset Staking",
  "Additional NFT Assets",
  "Additional Characters",
];

const forth = [
  "Game rewards for game asset & NFT",
  "New NFT Collectibles",
  "Collaboration With Influencers",
  "User-Generated Events",
  "New Partnerships",
  "VR gallery",
  "Arena Mastser VR (Quest 2)",
];
export default function Roadmap({ roadmapRef }) {
  const color = useColorModeValue("#05121B", "#FFF");
  const reverseColor = useColorModeValue("#FFF", "#05121B");

  const backgroundColor = useColorModeValue(
    "linear-gradient(45deg, #05121B 0%, #05131C 100%)",
    "linear-gradient(45deg, rgba(16, 39, 77, 0.4) 0%, rgba(13, 30, 57, 0.4) 100%)"
  );
  return (
    <Container>
      <Box
        ref={roadmapRef}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <svg
          width="220"
          height="80"
          viewBox="0 0 220 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.076 52.288C33.54 52.288 32.772 51.496 32.772 49.912V28.96C32.772 27.4 33.552 26.62 35.112 26.62H43.788C46.572 26.62 48.72 27.292 50.232 28.636C51.744 29.956 52.5 31.816 52.5 34.216C52.5 36.112 52.008 37.684 51.024 38.932C50.04 40.156 48.624 40.984 46.776 41.416C48 41.8 49.008 42.724 49.8 44.188L52.5 49.192C52.908 49.96 52.98 50.668 52.716 51.316C52.476 51.964 51.864 52.288 50.88 52.288C50.232 52.288 49.704 52.156 49.296 51.892C48.888 51.604 48.528 51.172 48.216 50.596L44.58 43.9C44.148 43.084 43.632 42.544 43.032 42.28C42.456 41.992 41.712 41.848 40.8 41.848H37.38V49.912C37.38 51.496 36.612 52.288 35.076 52.288ZM37.38 38.428H42.996C46.356 38.428 48.036 37.06 48.036 34.324C48.036 31.612 46.356 30.256 42.996 30.256H37.38V38.428ZM64.5907 52.36C62.7667 52.36 61.1827 51.988 59.8387 51.244C58.4947 50.5 57.4507 49.444 56.7067 48.076C55.9627 46.684 55.5907 45.052 55.5907 43.18C55.5907 41.308 55.9627 39.688 56.7067 38.32C57.4507 36.952 58.4947 35.896 59.8387 35.152C61.1827 34.408 62.7667 34.036 64.5907 34.036C66.4147 34.036 67.9987 34.408 69.3427 35.152C70.6867 35.896 71.7307 36.952 72.4747 38.32C73.2187 39.688 73.5907 41.308 73.5907 43.18C73.5907 45.052 73.2187 46.684 72.4747 48.076C71.7307 49.444 70.6867 50.5 69.3427 51.244C67.9987 51.988 66.4147 52.36 64.5907 52.36ZM64.5907 48.94C65.9347 48.94 67.0147 48.46 67.8307 47.5C68.6467 46.516 69.0547 45.076 69.0547 43.18C69.0547 41.26 68.6467 39.832 67.8307 38.896C67.0147 37.936 65.9347 37.456 64.5907 37.456C63.2467 37.456 62.1667 37.936 61.3507 38.896C60.5347 39.832 60.1267 41.26 60.1267 43.18C60.1267 45.076 60.5347 46.516 61.3507 47.5C62.1667 48.46 63.2467 48.94 64.5907 48.94ZM83.1008 52.36C81.8288 52.36 80.6888 52.12 79.6808 51.64C78.6968 51.136 77.9168 50.464 77.3408 49.624C76.7888 48.784 76.5128 47.836 76.5128 46.78C76.5128 45.484 76.8488 44.464 77.5208 43.72C78.1928 42.952 79.2848 42.4 80.7968 42.064C82.3088 41.728 84.3368 41.56 86.8808 41.56H88.1408V40.804C88.1408 39.604 87.8768 38.74 87.3488 38.212C86.8208 37.684 85.9328 37.42 84.6848 37.42C83.9888 37.42 83.2328 37.504 82.4168 37.672C81.6248 37.84 80.7848 38.128 79.8968 38.536C79.3208 38.8 78.8408 38.836 78.4568 38.644C78.0728 38.428 77.8088 38.104 77.6648 37.672C77.5448 37.216 77.5688 36.76 77.7368 36.304C77.9288 35.848 78.3008 35.512 78.8528 35.296C79.9568 34.84 81.0128 34.516 82.0208 34.324C83.0528 34.132 83.9888 34.036 84.8288 34.036C87.3968 34.036 89.3048 34.636 90.5528 35.836C91.8008 37.012 92.4248 38.848 92.4248 41.344V49.984C92.4248 51.52 91.7288 52.288 90.3368 52.288C88.9208 52.288 88.2128 51.52 88.2128 49.984V49.192C87.8048 50.176 87.1568 50.956 86.2688 51.532C85.3808 52.084 84.3248 52.36 83.1008 52.36ZM84.0368 49.264C85.2128 49.264 86.1848 48.856 86.9528 48.04C87.7448 47.224 88.1408 46.192 88.1408 44.944V44.152H86.9168C84.6608 44.152 83.0888 44.332 82.2008 44.692C81.3368 45.028 80.9048 45.652 80.9048 46.564C80.9048 47.356 81.1808 48.004 81.7328 48.508C82.2848 49.012 83.0528 49.264 84.0368 49.264ZM103.76 52.36C102.224 52.36 100.868 51.988 99.6923 51.244C98.5403 50.5 97.6403 49.444 96.9923 48.076C96.3443 46.684 96.0203 45.052 96.0203 43.18C96.0203 41.284 96.3443 39.664 96.9923 38.32C97.6403 36.952 98.5403 35.896 99.6923 35.152C100.868 34.408 102.224 34.036 103.76 34.036C105.008 34.036 106.136 34.312 107.144 34.864C108.152 35.416 108.908 36.148 109.412 37.06V28.6C109.412 27.088 110.156 26.332 111.644 26.332C113.156 26.332 113.912 27.088 113.912 28.6V49.984C113.912 51.52 113.168 52.288 111.68 52.288C110.192 52.288 109.448 51.52 109.448 49.984V49.228C108.944 50.188 108.188 50.956 107.18 51.532C106.172 52.084 105.032 52.36 103.76 52.36ZM105.02 48.94C106.364 48.94 107.444 48.46 108.26 47.5C109.076 46.516 109.484 45.076 109.484 43.18C109.484 41.26 109.076 39.832 108.26 38.896C107.444 37.936 106.364 37.456 105.02 37.456C103.676 37.456 102.596 37.936 101.78 38.896C100.964 39.832 100.556 41.26 100.556 43.18C100.556 45.076 100.964 46.516 101.78 47.5C102.596 48.46 103.676 48.94 105.02 48.94ZM120.882 52.288C119.394 52.288 118.65 51.52 118.65 49.984V36.376C118.65 34.864 119.382 34.108 120.846 34.108C122.31 34.108 123.042 34.864 123.042 36.376V37.096C123.57 36.136 124.302 35.392 125.238 34.864C126.174 34.312 127.254 34.036 128.478 34.036C131.118 34.036 132.846 35.188 133.662 37.492C134.214 36.412 135.006 35.572 136.038 34.972C137.07 34.348 138.246 34.036 139.566 34.036C143.526 34.036 145.506 36.448 145.506 41.272V49.984C145.506 51.52 144.75 52.288 143.238 52.288C141.75 52.288 141.006 51.52 141.006 49.984V41.452C141.006 40.108 140.778 39.124 140.322 38.5C139.89 37.876 139.146 37.564 138.09 37.564C136.914 37.564 135.99 37.984 135.318 38.824C134.646 39.64 134.31 40.78 134.31 42.244V49.984C134.31 51.52 133.566 52.288 132.078 52.288C130.566 52.288 129.81 51.52 129.81 49.984V41.452C129.81 40.108 129.582 39.124 129.126 38.5C128.694 37.876 127.962 37.564 126.93 37.564C125.754 37.564 124.83 37.984 124.158 38.824C123.486 39.64 123.15 40.78 123.15 42.244V49.984C123.15 51.52 122.394 52.288 120.882 52.288ZM155.945 52.36C154.673 52.36 153.533 52.12 152.525 51.64C151.541 51.136 150.761 50.464 150.185 49.624C149.633 48.784 149.357 47.836 149.357 46.78C149.357 45.484 149.693 44.464 150.365 43.72C151.037 42.952 152.129 42.4 153.641 42.064C155.153 41.728 157.181 41.56 159.725 41.56H160.985V40.804C160.985 39.604 160.721 38.74 160.193 38.212C159.665 37.684 158.777 37.42 157.529 37.42C156.833 37.42 156.077 37.504 155.261 37.672C154.469 37.84 153.629 38.128 152.741 38.536C152.165 38.8 151.685 38.836 151.301 38.644C150.917 38.428 150.653 38.104 150.509 37.672C150.389 37.216 150.413 36.76 150.581 36.304C150.773 35.848 151.145 35.512 151.697 35.296C152.801 34.84 153.857 34.516 154.865 34.324C155.897 34.132 156.833 34.036 157.673 34.036C160.241 34.036 162.149 34.636 163.397 35.836C164.645 37.012 165.269 38.848 165.269 41.344V49.984C165.269 51.52 164.573 52.288 163.181 52.288C161.765 52.288 161.057 51.52 161.057 49.984V49.192C160.649 50.176 160.001 50.956 159.113 51.532C158.225 52.084 157.169 52.36 155.945 52.36ZM156.881 49.264C158.057 49.264 159.029 48.856 159.797 48.04C160.589 47.224 160.985 46.192 160.985 44.944V44.152H159.761C157.505 44.152 155.933 44.332 155.045 44.692C154.181 45.028 153.749 45.652 153.749 46.564C153.749 47.356 154.025 48.004 154.577 48.508C155.129 49.012 155.897 49.264 156.881 49.264ZM172.068 58.768C170.58 58.768 169.836 58.012 169.836 56.5V36.376C169.836 34.864 170.568 34.108 172.032 34.108C173.52 34.108 174.264 34.864 174.264 36.376V37.132C174.768 36.196 175.524 35.452 176.532 34.9C177.54 34.324 178.692 34.036 179.988 34.036C181.524 34.036 182.868 34.408 184.02 35.152C185.196 35.896 186.108 36.952 186.756 38.32C187.404 39.664 187.728 41.284 187.728 43.18C187.728 45.052 187.404 46.684 186.756 48.076C186.108 49.444 185.208 50.5 184.056 51.244C182.904 51.988 181.548 52.36 179.988 52.36C178.74 52.36 177.612 52.096 176.604 51.568C175.62 51.016 174.864 50.284 174.336 49.372V56.5C174.336 58.012 173.58 58.768 172.068 58.768ZM178.728 48.94C180.072 48.94 181.152 48.46 181.968 47.5C182.784 46.516 183.192 45.076 183.192 43.18C183.192 41.26 182.784 39.832 181.968 38.896C181.152 37.936 180.072 37.456 178.728 37.456C177.384 37.456 176.304 37.936 175.488 38.896C174.672 39.832 174.264 41.26 174.264 43.18C174.264 45.076 174.672 46.516 175.488 47.5C176.304 48.46 177.384 48.94 178.728 48.94Z"
            fill={color}
          />
          <path
            d="M0.5 26.8755C0.5 22.4641 0.500994 19.2041 0.829149 16.6855C1.15545 14.181 1.79804 12.4781 3.03338 11.1456C4.26872 9.81314 5.91828 9.04374 8.3909 8.52918C10.8776 8.0117 14.1282 7.76445 18.5269 7.43121L104.901 0.887722C107.475 0.692704 108.737 0.597427 110 0.597427C111.263 0.597427 112.525 0.692704 115.099 0.887723L201.473 7.43121C205.872 7.76445 209.122 8.0117 211.609 8.52918C214.082 9.04374 215.731 9.81314 216.967 11.1456C218.202 12.4781 218.845 14.181 219.171 16.6855C219.499 19.2041 219.5 22.4641 219.5 26.8755V52.1991C219.5 56.5698 219.499 59.7996 219.175 62.2971C218.853 64.7805 218.219 66.4723 216.999 67.8011C215.779 69.13 214.148 69.9067 211.701 70.4401C209.241 70.9765 206.023 71.2538 201.668 71.6277L115.774 79.0024C112.859 79.2526 111.431 79.3749 110 79.3749C108.569 79.3749 107.14 79.2526 104.226 79.0024L18.3319 71.6277C13.9772 71.2538 10.7594 70.9765 8.29873 70.4401C5.85205 69.9067 4.22072 69.13 3.00106 67.8011C1.7814 66.4723 1.14704 64.7805 0.824933 62.2971C0.500984 59.7996 0.5 56.5698 0.5 52.1991V26.8755Z"
            stroke="url(#paint0_linear_173_3308)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_173_3308"
              x1="110"
              y1="0"
              x2="110"
              y2="84.6154"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#006CA2" />
              <stop offset="1" stopColor="#006CA2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <Text py="2em" width="80%" textAlign="center">
          The main milestones of the Project
        </Text>
      </Box>
      <VerticalTimeline lineColor="#C45260">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            boxShadow: "inset 0px 0px 13px #016CA2",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ display: "none" }}
          date={
            <Box>
              <Img loading="lazy" src="./bear.png" />
            </Box>
          }
          iconStyle={{
            background: "#C45260",
            color: "#fff",
            boxShadow: "none",
          }}
          icon={
            <Box display="flex" height="100%" justifyContent="center">
              <Text
                fontWeight="700"
                fontSize={["1em", "2em"]}
                alignSelf="center"
              >
                01
              </Text>
            </Box>
          }
        >
          <List>
            {first.map((text, key) => (
              <ListItem key={key} display="flex" alignItems="center" mt="1em">
                <Img
                  loading="lazy"
                  width="2.5em"
                  height="2.5em"
                  src="./check.png"
                />
                <Text color="#FFF" mt="0 !important" ml="0.5em !important">
                  {text}
                </Text>
              </ListItem>
            ))}
            {firstU.map((text, key) => (
              <ListItem key={key} display="flex" alignItems="center" mt="1em">
                <Img
                  loading="lazy"
                  width="2.5em"
                  height="2.5em"
                  src="./uncheck.png"
                />
                <Text color="#FFF" mt="0 !important" ml="0.5em !important">
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            boxShadow: "inset 0px 0px 13px #016CA2",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ display: "none" }}
          date={
            <Box>
              <Img loading="lazy" src="./fox.png" />
            </Box>
          }
          iconStyle={{
            background: "#C45260",
            color: "#fff",
            boxShadow: "none",
          }}
          icon={
            <Box display="flex" height="100%" justifyContent="center">
              <Text
                fontWeight="700"
                fontSize={["1em", "2em"]}
                alignSelf="center"
              >
                02
              </Text>
            </Box>
          }
        >
          <List>
            {second.map((text, key) => (
              <ListItem key={key} display="flex" alignItems="center" mt="1em">
                <Img
                  loading="lazy"
                  width="2.5em"
                  height="2.5em"
                  src="./uncheck.png"
                />
                <Text color="#FFF" mt="0 !important" ml="0.5em !important">
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            boxShadow: "inset 0px 0px 13px #016CA2",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ display: "none" }}
          date={
            <Box>
              <Img loading="lazy" src="./wolf.png" />
            </Box>
          }
          iconStyle={{
            background: reverseColor,
            color: "#000",
            boxShadow: `0 0 0 1px ${color}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)`,
          }}
          icon={
            <Box display="flex" height="100%" justifyContent="center">
              <Text
                fontWeight="700"
                fontSize={["1em", "2em"]}
                alignSelf="center"
                color={color}
              >
                03
              </Text>
            </Box>
          }
        >
          <List>
            {third.map((text, key) => (
              <ListItem key={key} display="flex" alignItems="center" mt="1em">
                <Img
                  loading="lazy"
                  width="2.5em"
                  height="2.5em"
                  src="./uncheck.png"
                />
                <Text color="#FFF" mt="0 !important" ml="0.5em !important">
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            boxShadow: "inset 0px 0px 13px #016CA2",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ display: "none" }}
          date={
            <Box>
              <Img loading="lazy" src="./kib.png" />
            </Box>
          }
          iconStyle={{
            background: reverseColor,
            color: "#000",
            boxShadow: `0 0 0 1px ${color}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)`,
          }}
          icon={
            <Box display="flex" height="100%" justifyContent="center">
              <Text
                fontWeight="700"
                fontSize={["1em", "2em"]}
                alignSelf="center"
                color={color}
              >
                04
              </Text>
            </Box>
          }
        >
          <List>
            {forth.map((text, key) => (
              <ListItem key={key} display="flex" alignItems="center" mt="1em">
                <Img
                  loading="lazy"
                  width="2.5em"
                  height="2.5em"
                  src="./uncheck.png"
                />
                <Text color="#FFF" mt="0 !important" ml="0.5em !important">
                  {text}
                </Text>
              </ListItem>
            ))}
          </List>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
