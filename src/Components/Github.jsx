import { Box, Flex,Img,Text } from "@chakra-ui/react"
import GitHubCalander from "react-github-calendar"

export const Github=()=>{

    return(<>
        <Box margin={"auto"} pb={{base:"50px",sm:"50px",md:"180px",lg:"180px",'2xl':"180px"}} width={"90%"}  >
            <Text  fontWeight={500} fontSize={"50px"} textAlign={"center"} >Github</Text>
            <Flex  mt={{base:"10px",md:"25px"}} justifyContent={"space-between"} direction={{base:"column",sm:"column",md:"cloumn",lg:"row",'2xl':"row"}}>
                <Img mb="20px" width={{base:"90%",sm:"90%",md:"35%",lg:"35%",'2xl':"35%"}} src="https://camo.githubusercontent.com/1d1d69456fabfe0f0a26e57cf96ba07323c64574a72ff287732e46a000a72960/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d696e696b68696c6d616c696b26" />
                <Img mb="20px" width={{base:"90%",sm:"90%",md:"25%",lg:"25%",'2xl':"25%"}} src="https://camo.githubusercontent.com/4f78aad08da007cc1c5fb88bc372c509b0f86c7f08b59ff3051cd0adeaf4be48/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d696e696b68696c6d616c696b2673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" />
                <Img mb="20px" width={{base:"90%",sm:"90%",md:"33%",lg:"33%",'2xl':"33%"}} src="https://camo.githubusercontent.com/bb5117db47ed13f95b834158d2a74ae03fa48065fbab71c1db026217e1d21b89/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d696e696b68696c6d616c696b2673686f775f69636f6e733d74727565266c6f63616c653d656e" />
            </Flex>
            <Box p="20px" width={{base:"100%",sm:"100%",md:"66%",lg:"66%",'2xl':"66%"}} margin={"auto"}  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" size={100} mt={"20px"} >
                <GitHubCalander username="inikhilmalik" />
            </Box>
        </Box>
    </>)
}