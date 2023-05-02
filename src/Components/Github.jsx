import { Box, Flex,Img,Text } from "@chakra-ui/react"
import GitHubCalander from "react-github-calendar"

export const Github=()=>{

    return(<>
        <Box  margin={"auto"} pb={{base:"50px",sm:"50px",md:"180px",lg:"180px",'2xl':"180px"}} width={"90%"}  >
            <Text  fontWeight={500} fontSize={"50px"} textAlign={"center"} >Github</Text>
            <Flex  mt={{base:"10px",md:"25px"}} justifyContent={"space-between"} direction={{base:"column",sm:"column",md:"cloumn",lg:"row",'2xl':"row"}}>
                <Img id="github-streak-stats" mb="20px" width={{base:"100%",sm:"100%",md:"100%",lg:"31%",'2xl':"31%"}} src="https://github-readme-streak-stats.herokuapp.com?user=inikhilmalik" />
                <Img id="github-top-langs" mb="20px" width={{base:"100%",sm:"100%",md:"100%",lg:"22%",'2xl':"22%"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=inikhilmalik&layout=compact" />
                <Img id="github-stats-card" mb="20px" width={{base:"100%",sm:"100%",md:"100%",lg:"36%",'2xl':"36%"}} src="https://github-readme-stats.vercel.app/api?username=inikhilmalik&hide=contribs,prs" />
            </Flex>
            <Box p="20px" width={{base:"100%",sm:"100%",md:"100%",lg:"66%",'2xl':"66%"}} margin={"auto"}  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" size={100} mt={"20px"} >
                <GitHubCalander username="inikhilmalik"  />
            </Box>
        </Box>
    </>)
}