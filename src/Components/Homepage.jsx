import { Box, Flex,Img,Text } from "@chakra-ui/react"
import REACTLOGO from "../Images/Photo.png"

export const Homepage=()=>{

    return(<>
       <Flex  height="650px" >
            <Flex justifyContent={"end"} textAlign={"start"}   width={"50%"} >
                <Box mt={"100px"} width={"75%"}  alignContent="center"  >
                    <Text fontWeight={550} fontSize={45} >Hii, i'm</Text>
                    <Text fontWeight={550} fontSize={50}>NIKHIL MALIK</Text>
                    <Text fontWeight={600} fontSize={30} >Full Stack Web Developer</Text>
                    <Text mt={"30px"} >An aspiring Full Stack Web Developer skilled in MERN stack. Developing many websites and can learn new software and technologies quickly.
Capability to work in teams by providing valuable support.
</Text>
                </Box>
            </Flex>
            <Box   width={"50%"} >
                <Box width={"80%"} mt={"100px"} >
                    <Img  margin={"auto"} width={"50%"} src={REACTLOGO} />
                </Box>
            </Box>
       </Flex>
    </>)
}