import {
    Box,
    Heading,
    SimpleGrid,
    GridItem,
    Image,
    Button,
    Text,
} from "@chakra-ui/react";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { data } from "../projectData"

const Projects = () => {
    return (
        // <Box w="100%" pt={10} pb={6} id="projects">
        //     <Heading pb={6} as="h2" variant="section-title">
        //         Projects
        //     </Heading>

        //     {data.map((project) => (
        //         <SimpleGrid key={project.id} pb={6} columns={{ base: 1, md: 1 }} spacing={8}>
        //             <GridItem>
        //                 <Text pb={4} fontSize="xl" fontWeight="bold">
        //                     {project.name}
        //                 </Text>

        //                 <Box boxShadow="lg">
        //                     <Image
        //                         src={project.img}
        //                         alt="Dhruv homepage"
        //                         objectFit="cover"
        //                         borderRadius="xl"
        //                     />
        //                 </Box>
        //                 <Box>
        //                     {project.stack.map((item) => (
        //                         <Button
        //                             key={item}
        //                             marginTop={6}
        //                             colorScheme="teal"
        //                             variant="outline"
        //                             size="sm"
        //                             cursor="default"
        //                             borderRadius="lg"
        //                             mr={6}
        //                         >
        //                             {item}
        //                         </Button>
        //                     ))}
        //                 </Box>

        //                 <Box marginTop={6} marginBottom={8}>
        //                     <a
        //                         href={project.githubLink}
        //                         target="_blank"
        //                         rel="noopener noreferrer"
        //                     >
        //                         <Button
        //                             align="center"
        //                             leftIcon={<BiCodeAlt />}
        //                             variant="outline"
        //                             colorScheme="teal"
        //                             mr={8}
        //                         >
        //                             View Scource
        //                         </Button>
        //                     </a>

        //                     <a
        //                         href={project.liveLink}
        //                         target="_blank"
        //                         rel="noopener noreferrer"
        //                     >
        //                         <Button
        //                             align="center"
        //                             leftIcon={<BsFillEyeFill />}
        //                             colorScheme="teal"
        //                         >
        //                             Live Demo
        //                         </Button>
        //                     </a>
        //                 </Box>
        //             </GridItem>
        //         </SimpleGrid>
        //     ))}
        // </Box>
        <>
        
        </>
    );
};

export default Projects;
