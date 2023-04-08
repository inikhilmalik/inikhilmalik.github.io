import { Box, Flex,Img,Text } from "@chakra-ui/react"

export const Education=()=>{

    let color="rgb(224,87,87)";
    return(<>
        <Box margin={"auto"}  width={"90%"} pb={{base:"50px",sm:"50px",md:"200px",lg:"200px",'2xl':"200px"}}  >
            <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >Education</Text>
            <Flex  mt={{base:"10px",md:"25px"}} justifyContent={"space-between"} direction={{base:"column",sm:"column",md:"cloumn",lg:"row",'2xl':"row"}} >
                <Box mb="20px" p={"20px 15px"}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}  width={{base:"100%",sm:"100%",md:"100%",lg:"31%",'2xl':"31%"}} >
                    <Text color={color} fontSize={"30px"}>Full Stack Web Development</Text>
                    <Text>(Full Time)</Text>
                    <Text fontSize={"20px"}>Masai School, Bangalore</Text>
                    <Text>Sept'2022 - Present</Text>
                </Box>
                <Box mb="20px" p={"20px 15px"}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}  width={{base:"100%",sm:"100%",md:"100%",lg:"31%",'2xl':"31%"}} >
                    <Text color={color} fontSize={"30px"}>Bachelor of Technology</Text>
                    <Text>(Mechanical Engineering)</Text>
                    <Text fontSize={"20px"}>Delhi Technological University, New Delhi</Text>
                    <Text>Aug'2018 - Aug'2022</Text>
                </Box>
                <Box mb="20px" p={"20px 15px"}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}  width={{base:"100%",sm:"100%",md:"100%",lg:"31%",'2xl':"31%"}} >
                    <Text color={color} fontSize={"30px"}>Higher Secondary</Text>
                    <Text>(CBSE)</Text>
                    <Text fontSize={"20px"}>Nav Bharti Public School, New Delhi</Text>
                    <Text>Mar'2017 - June'2018</Text>
                </Box>

            </Flex>
        </Box>
    </>)
}