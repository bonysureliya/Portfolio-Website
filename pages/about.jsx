import {
    Box,
    Heading,
    Container,
    SimpleGrid,
    Grid,
    Img,
    GridItem,
    Text,
} from "@chakra-ui/react";
import Image1 from "../public/images/html.png";

const About = () => {
    return (
        <Box w="100%" h="auto" id="about" pt={10} pb={6} zIndex={1}>
            <Heading pb={6} as="h2" variant="section-title">
                About Me
            </Heading>

            <SimpleGrid
                w="100%"
                h="100%"
                columns={{ base: 1, md: 5 }}
                spacing={8}
                pb={6}
            >
                <GridItem colSpan={3}>
                    <Text fontSize="lg">
                        An individual who is inclined to help and bring
                        creativity to the team as well as in his work. Over
                        these years I have learned to stay calm under work
                        pressure. A front-end enthusiastic individual who loves
                        exploring and learning new skills and improving.
                        Currently looking for an opportunity in an environment
                        that adds value to my skillsets and will help turn me
                        into a full-stack developer.
                    </Text>
                </GridItem>

                <GridItem colSpan={2}>
                    <Box boxShadow="lg" h="full" w="100%">
                        <Img
                            src="/images/image1.png"
                            alt="/"
                            h="full"
                            objectFit="cover"
                            borderRadius="xl"
                        />
                    </Box>
                </GridItem>
            </SimpleGrid>
        </Box>
    );
};

export default About;
