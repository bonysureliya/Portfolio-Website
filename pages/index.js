import NextLink from "next/link";
import Layout from "../components/layout/article";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Layout>
      <VStack
        w="100%"
        h="80vh"
        pt={10}
        align="center"
        justify="center"
        id="home"
      >
        <Box>
          <Heading as="h1" size={{ base: "3xl", md: "4xl" }}>
            Hi I&apos;m
          </Heading>
        </Box>

        <Box>
          <Heading
            mb={6}
            as="h1"
            color={useColorModeValue("blue.700", "blue.500")}
            size={{ base: "3xl", md: "4xl" }}
          >
            Bony Sureliya
          </Heading>
        </Box>

        <Box
          w="100%"
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
          textTransform="capitalize"
        >
          a Full Stack Developer
        </Box>

        <Box pt={4} align="left">
          <Text fontSize="lg">
          As a full-stack developer, I am passionate about contributing my creativity and skills to my team and work. I have developed a strong ability to stay composed and focused under pressure while consistently delivering high-quality work. As an enthusiastic and curious individual, I thrive on exploring new skills and techniques to continuously improve my abilities. I am currently seeking an opportunity to grow and enhance my skill set in an environment that values my contributions and helps me advance as a full-stack developer.
          </Text>
        </Box>

        <Box pt={5} w="full" align="left">
          <NextLink href="#contact">
            <Button
              scale={1.2}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              size="md"
            >
              Contact Me
            </Button>
          </NextLink>
        </Box>
      </VStack>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
