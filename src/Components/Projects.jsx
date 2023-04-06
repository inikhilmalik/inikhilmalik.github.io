import { Box, Flex, Text,Img } from "@chakra-ui/react"
import p1 from "../Images/Shopper.png"
import p2 from "../Images/Engagebay.png"
import p3 from "../Images/Buffer.png"

export const Projects=()=>{

    return(<>
        <Box margin={"auto"} pb={{base:"50px",sm:"50px",md:"200px",lg:"200px",'2xl':"200px"}} width={"90%"}  >
            <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >Projects</Text>
            <Flex   mt={{base:"10px",md:"25px"}} justifyContent={"space-between"} direction={{base:"column",sm:"column",md:"cloumn",lg:"row",'2xl':"row"}} >
                <Box  mb="20px" p={"20px 15px"}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}  width={{base:"100%",sm:"100%",md:"100%",lg:"31.5%",'2xl':"31.5%"}} >
                    <Img src={p1} border={"1px solid black"} />
                    <Text mt="10px" fontWeight={600} fontSize={"20px"}>Shoppers</Text>
                    <Text >Shoppers is an e-commerce shopping website that sells
clothing for men.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Users can search and sort the product simultaneously.</Text>
                    <Text >• Users can add and remove the product from the cart.</Text>
                    <Text >• Users can add and remove the product from the cart.</Text>
                    <Text >• Created User login authentication through mock API.</Text>
                    <Text >• Data fetched from API using mock JSON-Server.</Text>
                    <Text >• Cart Page required user login authentication.</Text>
                    <Text >• Perform CRUD operation & Added Dark Mode feature.</Text>
                    <Text >• Implemented pagination functionality and buttons got
disabled on the first and last page.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text >• HTML | CSS | JavaScript | React | Chakra-UI</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Individual Project that took 5 days to complete.</Text>
                </Box>
                <Box mb="20px" p={"20px 15px"}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}   width={{base:"100%",sm:"100%",md:"100%",lg:"31.5%",'2xl':"31.5%"}} >
                    <Img src={p2} border={"1px solid black"} />
                    <Text mt="10px" fontWeight={600} fontSize={"20px"}>Engagebay Clone</Text>
                    <Text >Engagebay is an integrated marketing, sales, and CRM Software.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Users Login and Signup functionality.</Text>
                    <Text >• Adding and managing contacts.</Text>
                    <Text >• Perform CRUD operation. Dashboard to see all details.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text >• HTML | CSS | JavaScript</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Areas of Responsibility :-</Text>
                    <Text >• Created Account Setting Page and Referral Page.</Text>
                    <Text >• Implemented Login / Signup feature through mock API.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Collaborative Project that took 5 days to complete by a team
of 4 developers.</Text>
                </Box>
                <Box mb="20px" p={"20px 15px"}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}  width={{base:"100%",sm:"100%",md:"100%",lg:"31.5%",'2xl':"31.5%"}} >
                    <Img src={p3} border={"1px solid black"} />
                    <Text mt="10px" fontWeight={600} fontSize={"20px"}>Buffer Clone</Text>
                    <Text >Buffer is a social media management software that allows
users to schedule their posts.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Created a sticky Navbar on Home Page.</Text>
                    <Text >• Implemented user Login Page and Signup Page.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text >• HTML | CSS | JavaScript</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}> Individual Project that took 4 days to complete.</Text>
                </Box>
            </Flex>
        </Box>
    </>)
}