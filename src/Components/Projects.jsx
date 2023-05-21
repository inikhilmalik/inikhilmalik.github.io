import { Box, Flex, Text,Img, Button,Grid, useColorModeValue } from "@chakra-ui/react"
import p1 from "../Images/Shopper.png"
import p2 from "../Images/Snapdeal.png"
import p3 from "../Images/Amazon.png"
import p4 from "../Images/EngageBay.png"
// import p5 from "../Images/Buffer.png"
import { IoLogoGithub } from 'react-icons/io';
import { SiNetlify } from "react-icons/si";

export const Projects=()=>{

    let color="rgb(224,87,87)";

    return(<>
        <Box  id="projects"  margin={"auto"} pt={{base:"55px",sm:"55px",md:"70px"}}  pb={{base:"50px",sm:"50px",md:"200px",lg:"200px",'2xl':"200px"}} width={"90%"}  >
            <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >Projects</Text>
            <Grid margin={"auto"} gap={{base:"25px",sm:"30px",md:"50px",lg:"50px",'2xl':"50px"}} justifyContent={"center"} gridTemplateColumns={{base:"repeat(1,100%)",sm:"repeat(1,100%)",md:"repeat(1,100%)",lg:"repeat(2,35%)",'2xl':"repeat(2,35%)"}}  mt={{base:"10px",md:"20px"}}   >
                <Box className="project-card" p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}}  textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}   >
                    <Img src={p1} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Shoppers</Text>
                    <Text className="project-description">Shoppers is an e-commerce shopping website that sells clothing for men.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Login & Signup validation with JWT Authentication.</Text>
                    <Text >• Search and Sort the product simultaneously.</Text>
                    <Text >• Perform CRUD operation and made all pages responsive.</Text>
                    <Text >• Add to cart and remove from the cart page.</Text>
                    <Text >• Created manual Dark Mode feature.</Text>
                    <Text >• Complete end-to-end flow from login to payment gateway.</Text>
                    <Text >• Implemented pagination functionality.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text className="project-tech-stack" >• HTML | CSS | JavaScript | React.js | Chakra-UI | Node.js | Express.js | MongoDB</Text>
                    <Text mt="15px" mb={"15px"} fontWeight={600} fontSize={"15px"}>Individual Project that took 5 days to complete.</Text>
                    
                        <a className="project-deployed-link" href="https://chimerical-yeot-a8de27.netlify.app/" target="blank" > <Button  _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/Shoppers" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button></a>
                </Box>
                
                <Box className="project-card" p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}} textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}   >
                    <Img src={p2} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Snapdeal-Clone</Text>
                    <Text className="project-description">Snapdeal is an e-commerce website that sells clothes and products. It brings together a wide assortment of good-quality products and value-priced merchandise on its platform.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Login & Signup validation with JWT & password hashing.</Text>
                    <Text >• Perform CRUD operation.</Text>
                    <Text >• Sort functionality by price and color.</Text>
                    <Text >• Add to cart and remove from the cart page.</Text>
                    <Text >• Complete end-to-end flow from login to payment gateway.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text >• HTML | CSS | JavaScript | React.js | Chakra-UI | Redux | Node.js | Express.js | MongoDB</Text>
                    <Text  mt="15px" fontWeight={600} fontSize={"15px"}>Collaborative Project that took 5 days to complete.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Areas of Responsibility :-</Text>
                    <Text >• Implemented Login / Signup validation with backend routes.</Text>
                    <Text mb="15px" className="project-tech-stack" >• Made all pages responsive and also created the backend.</Text>
                    
                        <a className="project-deployed-link" href="https://marvelous-dieffenbachia-ed52a2.netlify.app/" target="blank" > <Button _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/Snapdeal-clone" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>                    
                    
                </Box>

                <Box className="project-card"  p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}} textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}    >
                    <Img src={p3} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Amazon-clone</Text>
                    <Text className="project-description">Amazon is a popular online shopping website that offers a vast selection of products.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Login & Signup validation with password hashing.</Text>
                    <Text >• Add to cart and remove from the cart.</Text>
                    <Text >• Product filtering and sorting work together.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text >• HTML | CSS | JavaScript | React.js | Chakra-UI | Redux | Node.js | Express.js | MongoDB</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Collaborative Project that took 5 days to complete.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Areas of Responsibility :-</Text>
                    <Text >• Implemented Login / Signup validation.</Text>
                    <Text mb="15px" className="project-tech-stack" >• Created Homepage layout and carousels with chakra-UI.</Text>
                    
                        <a className="project-deployed-link" href="https://645a87a3fcabeb0e73f98b76--luminous-biscochitos-2bc0f9.netlify.app/" target="blank" > <Button _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/Amazon-clone" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>                    
                    
                </Box>

                <Box className="project-card"  p={"20px 15px"} _hover={{border:"1px solid rgb(224,87,87)"}} textAlign={"start"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}    >
                    <Img src={p4} border={"1px solid black"} />
                    <Text color={color} className="project-title" mt="10px" fontWeight={600} fontSize={"20px"}>Engagebay-clone</Text>
                    <Text className="project-description">Engagebay is an integrated marketing, sales, and CRM Software.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Features :-</Text>
                    <Text >• Users Login and Signup functionality.</Text>
                    <Text >• Adding and managing contacts.</Text>
                    <Text >• Perform CRUD operation. Dashboard to see all details.</Text>
                    <Text className="project-tech-stack" mt="15px" fontWeight={600} fontSize={"15px"}>Tech Stack :-</Text>
                    <Text >• HTML | CSS | JavaScript</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Collaborative Project that took 5 days to complete.</Text>
                    <Text mt="15px" fontWeight={600} fontSize={"15px"}>Areas of Responsibility :-</Text>
                    <Text >• Created Account Setting Page and Referral Page.</Text>
                    <Text mb="15px" className="project-tech-stack" >• Implemented Login / Signup feature through mock API.</Text>
                    
                        <a className="project-deployed-link" href="https://vaishnavidhobale.github.io/step-up/" target="blank" > <Button _hover={{bg:color,color:"white"}} className="project-deployed-link" borderRadius={"0px"} border="1px solid rgb(224,87,87)" mt={{base:"5px",sm:"0px"}} bg={useColorModeValue('white', 'none')} color={color} >Deploy <SiNetlify className="skills-card-img"  style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>
                        <a className="project-github-link" href="https://github.com/inikhilmalik/EngageBay-clone" target="blank" ><Button _hover={{bg:color,color:"white"}} className="project-github-link" borderRadius={"0px"} ml={{base:"0px",sm:"10px"}} mt={{base:"5px",sm:"0px"}} border="1px solid rgb(224,87,87)" bg={useColorModeValue('white', 'none')} color={color} >Github <IoLogoGithub className="skills-card-img" style={{margin:"0px 0px 0px 5px"}} size={20}/></Button> </a>                    
                    
                </Box>

            </Grid>
        </Box>
    </>)
}