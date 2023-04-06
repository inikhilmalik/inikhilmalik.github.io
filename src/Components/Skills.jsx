import React from 'react';
import { Grid,Text,Box,Flex } from '@chakra-ui/react';
import { IoLogoHtml5,IoLogoCss3,IoLogoGithub } from 'react-icons/io';
import { IoLogoReact,IoLogoJavascript } from "react-icons/io5";
import { SiChakraui,SiRedux,SiTypescript,SiNetlify } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

export const Skills=()=>{

    return(<>
    <Box width={"90%"} margin={"auto"} pb={{base:"70px",sm:"70px",md:"200px",lg:"200px",'2xl':"200px"}}>
        <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >Skills</Text>
        <Grid  mt={{base:"10px",md:"25px"}} gridTemplateColumns={{base:"repeat(3,1fr)",sm:"repeat(5,1fr)",md:"repeat(5,1fr)",lg:"repeat(10,1fr)",'2xl':"repeat(10,1fr)"}}   >
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoHtml5  size={50} color='rgb(216,73,36)' />
                <Text>HTML</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoCss3  size={50} color='rgb(38,77,228)' />
                <Text>CSS</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoJavascript  size={50} color='rgb(247,224,24)' />
                <Text>JavaScript</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoReact  size={50} color='rgb(97,219,251)' />
                <Text>React</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiRedux  size={50} color='rgb(118,74,188)' />
                <Text>Redux</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiTypescript  size={50} color='rgb(49,120,198)' />
                <Text>Typescript</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiChakraui  size={50} color='rgb(108,202,206)' />
                <Text>Chakra-Ui</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <TbBrandCypress  size={50} color='black' />
                <Text>Cypress</Text>
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <IoLogoGithub  size={50} color='black' />
                <Text>Github</Text>
            </Flex>
            <Flex  direction={"column"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
                <SiNetlify  size={50} color='rgb(37,181,175)' />
                <Text>Netlify</Text>
            </Flex>
            
            
        </Grid>
    </Box>
    </>)
}