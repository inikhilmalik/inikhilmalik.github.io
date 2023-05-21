import React from 'react';
import { Grid,Text,Box,Flex } from '@chakra-ui/react';
import { IoLogoReact,IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5,IoLogoCss3,IoLogoGithub } from 'react-icons/io';
import { SiChakraui,SiRedux,SiTypescript,SiNetlify,SiExpress,SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbBrandCypress } from "react-icons/tb";

export const Skills=()=>{

    return(<>
    <Box  id="skills"  width={"90%"} pt={{base:"55px",sm:"55px",md:"70px"}} margin={"auto"} pb={{base:"70px",sm:"70px",md:"200px",lg:"200px",'2xl':"200px"}}>
        <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >Skills</Text>
        <Box >
            <Text mt={{base:"15px",md:"25px"}} color={"rgb(224,87,87)"} fontSize={"30px"} textAlign={"center"} >Frontend</Text>
            <Grid  mt={{base:"5px",md:"15px"}} justifyContent={"center"} width={{base:"auto",sm:"auto"}}  gap={5} gridTemplateColumns={{base:"repeat(2,auto)",sm:"repeat(4,auto)",md:"repeat(4,auto)",lg:"repeat(8,auto)",'2xl':"repeat(8,auto)"}}   >
            <Flex className="skills-card" direction={"column"} justifyContent={"center"}  alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoHtml5 className="skills-card-img" size={50} color='rgb(216,73,36)' />
                <Text className="skills-card-name">HTML</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoCss3 className="skills-card-img" size={50} color='rgb(38,77,228)' />
                <Text className="skills-card-name">CSS</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoJavascript className="skills-card-img" size={50} color='rgb(247,224,24)' />
                <Text className="skills-card-name">JavaScript</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoReact className="skills-card-img" size={50} color='rgb(97,219,251)' />
                <Text className="skills-card-name">React</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiRedux className="skills-card-img" size={50} color='rgb(118,74,188)' />
                <Text className="skills-card-name">Redux</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiTypescript className="skills-card-img" size={50} color='rgb(49,120,198)' />
                <Text className="skills-card-name">Typescript</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiChakraui className="skills-card-img" size={50} color='rgb(108,202,206)' />
                <Text className="skills-card-name">Chakra-Ui</Text>
            </Flex>
            
            
            </Grid>
        </Box>

        <Box >
            <Text mt={{base:"25px",md:"25px"}} color={"rgb(224,87,87)"} fontSize={"30px"} textAlign={"center"} >Backend</Text>
            <Grid  mt={{base:"5px",md:"15px"}} justifyContent={"center"} width={{base:"auto",sm:"auto"}}  gap={5} gridTemplateColumns={{base:"repeat(2,auto)",sm:"repeat(4,auto)",md:"repeat(4,auto)",lg:"repeat(7,auto)",'2xl':"repeat(7,auto)"}}    >
            <Flex className="skills-card" direction={"column"} justifyContent={"center"}  alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <FaNodeJs className="skills-card-img" size={50} color='rgb(15,161,76)' />
                <Text className="skills-card-name">Node js</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiExpress className="skills-card-img" size={50} color='black' />
                <Text className="skills-card-name">Express js</Text>
            </Flex>
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <DiMongodb className="skills-card-img" size={50} color='rgb(15,161,76)' />
                <Text className="skills-card-name">MongoDB</Text>
            </Flex>
           
            
            </Grid>
        </Box>

        <Box >
            <Text mt={{base:"25px",md:"25px"}} color={"rgb(224,87,87)"} fontSize={"30px"} textAlign={"center"} >Tools</Text>
            <Grid  mt={{base:"5px",md:"15px"}} justifyContent={"center"} width={{base:"auto",sm:"auto"}}  gap={5} gridTemplateColumns={{base:"repeat(2,auto)",sm:"repeat(4,auto)",md:"repeat(4,auto)",lg:"repeat(7,auto)",'2xl':"repeat(7,auto)"}}   >
            
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoGithub className="skills-card-img" size={50} color='black' />
                <Text className="skills-card-name">Github</Text>
            </Flex>
            
            <Flex className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <TbBrandCypress className="skills-card-img" size={50} color='black' />
                <Text className="skills-card-name">Cypress</Text>
            </Flex>
            <Flex  className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiNetlify className="skills-card-img" size={50} color='rgb(37,181,175)' />
                <Text className="skills-card-name">Netlify</Text>
            </Flex>
            <Flex  className="skills-card" direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiPostman className="skills-card-img" size={50} color='rgb(237,94,74)' />
                <Text className="skills-card-name">Postman</Text>
            </Flex>
            
            
            </Grid>
        </Box>
    </Box>
    </>)
}