import { Box, Flex, Text,Img, Button,Grid, useColorModeValue } from "@chakra-ui/react"
import p1 from "../Images/Shopper.png"
import p2 from "../Images/Engagebay.png"
import p3 from "../Images/Buffer.png"
import { IoLogoGithub } from 'react-icons/io';
import { SiNetlify } from "react-icons/si";

export const Projects=()=>{

    let color="rgb(224,87,87)";

    return(<>
        <Box  id="projects"  margin={"auto"} pt={{base:"55px",sm:"55px",md:"70px"}}  pb={{base:"50px",sm:"50px",md:"200px",lg:"200px",'2xl':"200px"}} width={"90%"}  >
            <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >Projects</Text>
            <Grid margin={"auto"} gap={{base:"25px",sm:"30px",md:"50px",lg:"50px",'2xl':"50px"}} justifyContent={"center"} gridTemplateColumns={{base:"repeat(1,100%)",sm:"repeat(1,100%)",md:"repeat(1,35%)",lg:"repeat(2,35%)",'2xl':"repeat(2,35%)"}}  mt={{base:"10px",md:"20px"}}   >
                <Box className="project-card" p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}   >
                    <Img src={p1} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Shoppers</Text>
                    <Text className="project-description">Shoppers is an e-commerce shopping website that sells clothing for men.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Users can search and sort the product simultaneously.</Text>
                    <Text >• Users can add and remove the product from the cart.</Text>
                    <Text >• Users can add and remove the product from the cart.</Text>
                    <Text >• Created User login authentication through mock API.</Text>
                    <Text >• Data fetched from API using mock JSON-Server.</Text>
                    <Text >• Cart Page required user login authentication.</Text>
                    <Text >• Perform CRUD operation & Added Dark Mode feature.</Text>
                    <Text >• Implemented pagination functionality.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text className="project-tech-stack" >• HTML | CSS | JavaScript | React | Chakra-UI</Text>
                    <Text mt="15px" mb={"10px"} fontWeight={600} fontSize={"15px"}>Individual Project that took 5 days to complete.</Text>
                    
                        <a className="project-deployed-link" href="https://keen-starlight-cce0c4.netlify.app/" target="blank" > <Button  _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/historical-toes-571" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button></a>
                </Box>
                <Box className="project-card"  p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}} textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}    >
                    <Img src={p2} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Engagebay Clone</Text>
                    <Text className="project-description">Engagebay is an integrated marketing, sales, and CRM Software.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Users Login and Signup functionality.</Text>
                    <Text >• Adding and managing contacts.</Text>
                    <Text >• Perform CRUD operation. Dashboard to see all details.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text >• HTML | CSS | JavaScript</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Areas of Responsibility :-</Text>
                    <Text >• Created Account Setting Page and Referral Page.</Text>
                    <Text className="project-tech-stack" >• Implemented Login / Signup feature through mock API.</Text>
                    <Text mb="10px" mt="15px" fontWeight={600} fontSize={"15px"}>Collaborative Project that took 5 days to complete by a team of 4 developers.</Text>
                    
                        <a className="project-deployed-link" href="https://step-up13.netlify.app/" target="blank" > <Button _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/wakeful-bushes-4379" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>                    
                    
                </Box>
                <Box className="project-card" p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}} textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}   >
                    <Img src={p3} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Buffer Clone</Text>
                    <Text className="project-description">Buffer is a social media management software that allows users to schedule their posts.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Created a sticky Navbar on Home Page.</Text>
                    <Text >• Implemented user Login Page and Signup Page.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text className="project-tech-stack" >• HTML | CSS | JavaScript</Text>
                    <Text mb="10px" mt="15px" fontWeight={600} fontSize={"15px"}> Individual Project that took 4 days to complete.</Text>
                    
                        <a className="project-deployed-link" href="https://celebrated-moonbeam-36fb09.netlify.app/" target="blank" > <Button _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/celestial-bubble-1320" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>                    
                    
                </Box>
                <Box className="project-card"  p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}} textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}   >
                    <Img src={p3} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Buffer Clone</Text>
                    <Text className="project-description">Buffer is a social media management software that allows users to schedule their posts.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Created a sticky Navbar on Home Page.</Text>
                    <Text >• Implemented user Login Page and Signup Page.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text className="project-tech-stack" >• HTML | CSS | JavaScript</Text>
                    <Text mb="10px" mt="15px" fontWeight={600} fontSize={"15px"}> Individual Project that took 4 days to complete.</Text>
                    
                        <a className="project-deployed-link" href="https://celebrated-moonbeam-36fb09.netlify.app/" target="blank" > <Button _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/celestial-bubble-1320" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>                    
                    
                </Box>
            </Grid>
        </Box>
    </>)
}