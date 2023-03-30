import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  Flex,
  Text,
  Icon,
  Grid,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaPython,
  FaBootstrap,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiChakraui,
  SiJavascript,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiMui,
  SiDjango,
  SiGoland,
} from "react-icons/si";

const Skills = () => {
  return (
    <Box w="100%" pt={10} pb={6} id="skills">
      <Container w="100%" maxW="container.md">
        <Heading as="h1" variant="section-title" pb={3}>
          Skills
        </Heading>
        <Heading as="h3" size="lg" font="bold" pb={6}>
          Languages & Tools I Use
        </Heading>
        <Stack align="center" justify="center" wrap="wrap" pb={6}>
          <SimpleGrid
            justify="center"
            align="center"
            columns={{ base: 2, lg: 4 }}
            spacing={8}
            w="100%"
            h="auto"
          >
            <SimpleGrid spacing={2}>
              <Box>
                <FaHtml5 fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  HTML5
                </Text>
              </Box>
            </SimpleGrid>
            <SimpleGrid spacing={2}>
              <Box>
                <FaCss3 style={{ paddingLeft: "10px" }} fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  CSS3
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiJavascript fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  JavaScript
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <FaReact fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  ReactJs
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <FaBootstrap fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  Bootstrap
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiTailwindcss fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  TailwindCss
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <FaGithub fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  GitHub
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiChakraui fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  ChakraUI
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <FaPython fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  Python
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiFastapi fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  FastAPI
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiMongodb fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  MongoDB
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiMysql fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  MySQL
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiTypescript fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  Typescript
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiMui fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  MUI
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiDjango fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  Django
                </Text>
              </Box>
            </SimpleGrid>

            <SimpleGrid spacing={2}>
              <Box>
                <SiGoland fontSize={"64px"} />
              </Box>
              <Box>
                <Text size="lg" fontWeight="bold">
                  GoLang
                </Text>
              </Box>
            </SimpleGrid>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Skills;
