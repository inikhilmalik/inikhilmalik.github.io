import { Box, Flex,Img,Text } from "@chakra-ui/react"
import REACTLOGO from "../Images/Photo.png"

export const Homepage=()=>{

    return(<>
       <Flex  margin="auto" pb={{base:"50px",sm:"50px",md:"100px",lg:"100px",'2xl':"100px"}} pt={{base:"50px",sm:"50px"}} width={"90%"} direction={{base:"column-reverse",sm:"column-reverse",md:"cloumn-reverse",lg:"row",'2xl':"row"}}  minH={{md:"680px"}} >
            <Flex justifyContent={{md:"center"}} textAlign={"start"}  pt={{base:"30px",sm:"30px"}}  >
                <Box  mt={{sm:"0px",md:"0px"}} width={{base:"100%",sm:"100%",md:"75%",lg:"75%",'2xl':"75%"}}  alignContent="center"  >
                    <Text fontWeight={550} fontSize={35} >Hii, i'm</Text>
                    <Text fontWeight={550} fontSize={50}>NIKHIL MALIK</Text>
                    <Text fontWeight={600} fontSize={30} >Full Stack Web Developer</Text>
                    <Text mt={"20px"} >Passionate Full Stack Web Developer proficient in MERN stack. Seeking to advance a growing tech career as a Web Development Engineer.</Text>
                </Box>
            </Flex>
            <Box width={"50%"}>
                <Flex  ml={{md:"30px"}} mt={{sm:"5px",md:"30px"}} >
                    <Img  width={"60%"} src={REACTLOGO} />
                </Flex>
            </Box>
       </Flex>
    </>)
}