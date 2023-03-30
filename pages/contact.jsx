import { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Image,
  Input,
  Textarea,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent");
  };

  return (
    <Box w="100%" h="100%" pb={6} id="contact">
      <Heading pb={6} as="h2" variant="section-title">
        Contact Me
      </Heading>

      <SimpleGrid w="full" h="full" spacing={8} columns={{ base: 1, md: 6 }}>
        {/*left*/}
        <GridItem colSpan={3}>
          <SimpleGrid w="full" h="full">
            <GridItem pb={6}>
              <Image
                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                alt="laptop image"
                objectFit="cover"
                borderRadius="xl"
              />
            </GridItem>

            <GridItem>
              <Text pb={4} fontWeight="bold" fontSize="xl">
                Contact Me With
              </Text>

              <Flex align="center" justify="start">
                <Box>
                  <a
                    href="https://github.com/bonysureliya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={25} />
                  </a>
                </Box>

                <Box ml={6}>
                  <a
                    href="https://twitter.com/BonySureliyaDev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterCircle size={25} />
                  </a>
                </Box>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </GridItem>

        {/*right*/}
        <GridItem w="100%" h="full" colSpan={3}>
          <Flex align="left" justify="center" direction="column">
            <form
              onSubmit={handelSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <Input type="hidden" name="form-name" value="contact" />
              <Flex w="100%" align="left" justify="space-between">
                <Box pb={4} pr={4}>
                  <lable>
                    Name
                    <Input
                      border="1px"
                      borderColor={useColorModeValue("#000", "#fff")}
                      type="text"
                      name="name"
                      mt={3}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </lable>
                </Box>

                <Box pb={4}>
                  <lable>
                    Email
                    <Input
                      border="1px"
                      borderColor={useColorModeValue("#000", "#fff")}
                      type="email"
                      name="email"
                      mt={3}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </lable>
                </Box>
              </Flex>
              <Box pb={4}>
                <lable>
                  Message
                  <Textarea
                    border="1px"
                    borderColor={useColorModeValue("#000", "#fff")}
                    name="message"
                    mt={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </lable>
              </Box>

              <Box align="left">
                <a>
                  <Button align="center" type="submit" colorScheme="teal">
                    Submit
                  </Button>
                </a>
              </Box>
            </form>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;
