import { Grid, Text, Box, Flex,Button,useColorModeValue } from '@chakra-ui/react';
import { FiDownload } from "react-icons/fi";
import Resume from "../Resume/Nikhil-Malik-Resume.pdf"


export const About = () => {

    return (<>
        <Box id="about"  pt={{base:"55px",sm:"55px",md:"70px"}} className="about section" width={"90%"} margin={"auto"} pb={{ base: "70px", sm: "70px", md: "180px", lg: "1800px", '2xl': "180px" }}>
            <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >About</Text>
            <Box mt={{ base: "10px", md: "25px" }} width={{ base: "75%", md: "55%" }} margin={"auto"}>
                <Text>Hii Everyone, My name is Nikhil Malik and i'm from New Delhi. I have completed my Bachlor of Technology specialzation in Mechanical Enginerring from Delhi Technological University. I have also completed a full time course of Full Stack Web Devepolment from Masai School, Bangalore. Developing many websites and can learn new software and technologies quickly. Capability to work in teams by providing valuable support. Seeking to advance a growing tech career as a Web Development Engineer.</Text>
            </Box>
            <Flex justifyContent="center" mt={{ base: "20px", md: "40px" }}>
            <a href={Resume} download={"Nikhil-Malik-Resume"}  >
                <Button id="resume-button-2" _hover={{bg:"none",color:"black",border:"1px solid rgb(224,87,87)",color:useColorModeValue("black","white")}} borderRadius="0px" color="white" bg="rgb(224,87,87)" >Download Resume <FiDownload style={{margin:"5px"}} /></Button>
            </a>
            </Flex>
        </Box>
    </>)
}