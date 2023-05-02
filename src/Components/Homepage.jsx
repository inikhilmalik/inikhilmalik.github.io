import { Box, Flex,Img,Text,Button,useColorModeValue } from "@chakra-ui/react"
import REACTLOGO from "../Images/Photo.png"
import {FiGithub} from "react-icons/fi"
import {SlSocialLinkedin} from "react-icons/sl"
import {HiOutlineMail} from "react-icons/hi"
import {IoCallOutline} from "react-icons/io5"
import {FiDownload} from "react-icons/fi"
import Resume from "../Resume/Nikhil-Malik-Resume.pdf"

export const Homepage=()=>{

    let color="rgb(224,87,87)";
    return(<>
       <Flex id="home" margin="auto"  pb={{base:"50px",sm:"50px",md:"100px",lg:"100px",'2xl':"100px"}} pt={{base:"90px",sm:"90px",md:"130px"}} width={"90%"} direction={{base:"column-reverse",sm:"column-reverse",md:"cloumn-reverse",lg:"row",'2xl':"row"}}  minH={{md:"680px"}} >
            <Flex justifyContent={{md:"center"}} textAlign={"start"}  pt={{base:"30px",sm:"30px"}}  >
                <Box  mt={{sm:"0px",md:"0px"}} width={{base:"100%",sm:"100%",md:"75%",lg:"75%",'2xl':"75%"}}  alignContent="center"  >
                    <Text fontWeight={550} fontSize={35} >Hii, i'm</Text>
                    <Text  id="user-detail-name" fontWeight={550} fontSize={50}>NIKHIL MALIK</Text>
                    <Text color={"rgb(224,87,87)"} fontWeight={600} fontSize={30} >Full Stack Web Developer</Text>
                    <Text mt={"20px"} color="gray"  >Passionate Full Stack Web Developer proficient in MERN stack. Seeking to advance a growing tech career as a Web Development Engineer.</Text>
                    <Flex justifyContent={"space-between"} width={{base:"50%",sm:"40%",md:"35%"}} mt={{base:6,md:12}}>
                       <a href="mailto: inikhilmalik@example.com" target="blank" > <Box  ><HiOutlineMail size={30} color={color}  /></Box></a>
                       <a href="https://github.com/inikhilmalik" target="blank" > <Box><FiGithub size={30} color={color } /></Box></a>
                       <a href="https://www.linkedin.com/in/inikhilmalik/" target="blank" > <Box><SlSocialLinkedin size={30} color={color}  /></Box></a>
                       <a href="tel:+919540972000" target="blank" > <Box><IoCallOutline size={30} color={color}  /></Box></a>
                    </Flex>
                    <Flex direction={{base:"column",sm:"row"}} mt={{base:"25px",md:"45px"}}>
                        

                        <a href={Resume} download={"Nikhil-Malik-Resume"}  >
                            <Button id="resume-button-2"  _hover={{bg:"none",color:"black",border:"1px solid rgb(224,87,87)",color:useColorModeValue("black","white")}} borderRadius="0px" color="white" bg="rgb(224,87,87)" >Download Resume <FiDownload style={{margin:"5px"}} /></Button>
                        </a> 
                        <a href={"https://drive.google.com/file/d/1EhwOuiFEVKV1ZAEM6O6RT_7AIBE6KpN9/view?usp=drivesdk"}  target="blank" >
                            <Button  mt={{base:"10px",sm:"0px"}} _hover={{bg:"none",color:"black",border:"1px solid rgb(224,87,87)",color:useColorModeValue("black","white")}} borderRadius="0px" color="white" bg="rgb(224,87,87)" ml={{sm:"15px"}} >View Resume</Button>
                        </a> 
                        </Flex>
                    
                </Box>
            </Flex>
            <Box width={"50%"}>
                <Flex  ml={{md:"30px"}} mt={{sm:"5px",md:"30px"}} >
                    <Img className="home-img"  width={{base:"90%",sm:"70%",md:"60%"}} src={REACTLOGO} />
                </Flex>
            </Box>
       </Flex>
    </>)
}