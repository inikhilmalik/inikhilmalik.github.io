import { Grid,Text,Box,Flex } from '@chakra-ui/react';


export const About=()=>{

    return(<>
        <Box width={"90%"} margin={"auto"}  pb={{base:"70px",sm:"70px",md:"180px",lg:"1800px",'2xl':"180px"}}>
        <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >About</Text>
        <Box mt={{base:"10px",md:"25px"}} width={"55%"} margin={"auto"}>
            <Text>Hii Everyone, My name is Nikhil Malik and i'm from New Delhi. I have completed my Bachlor of Technology specialzation in Mechanical Enginerring from Delhi Technological University. I have also completed a full time course of Full Stack Web Devepolment from Masai School, Bangalore. Developing many websites and can learn new software and technologies quickly. Capability to work in teams by providing valuable support. Seeking to advance a growing tech career as a Web Development Engineer.</Text>
        </Box>
    </Box>
    </>)
}