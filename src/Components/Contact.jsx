import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  import { RiLinkedinFill } from 'react-icons/ri';
import { useState } from 'react';
  
  export default function Contact() {
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
    const [message,setMessage]=useState("")

    const handleClick=()=>{
      setName("")
      setMail("")
      setMessage("")
    }

    return (<>
    <Box margin={"auto"} bpb={"20px"} pt={{base:"5px",sm:"55px",md:"65px"}} width={"100%"}  id="contact" >
        <Text fontWeight={500} fontSize={"50px"} textAlign={"center"} >Contact</Text>
        <Container  maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            
            color="white"
            borderRadius="lg"
            m={{ sm: 2, md: 8, lg: 5 }}
            pb={{ sm: 5, md: 5, lg: 20 }}
            >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    {/* <Heading>Contact</Heading> */}
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue('rgb(224,87,87)', 'white')}>
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue('black', 'white')}
                          _hover={{ border: '2px solid rgb(224,87,87)' }}
                          leftIcon={<MdLocationOn color="rgb(224,87,87)" size="20px" />}>
                          New Delhi, India
                        </Button>
                        <a href="tel:+919540972000"  id="contact-phone" target="blank" >
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue('black', 'white')}
                          _hover={{ border: '2px solid rgb(224,87,87)' }}
                          leftIcon={<MdPhone color="rgb(224,87,87)" size="20px" />}>
                          +91-9540972000
                        </Button>
                        </a>
                        <a href="mailto: inikhilmalik@example.com" id="contact-email"  target="blank" >
                        <Button
                          size="md"
                          height="48px"
                          width="230px"
                          variant="ghost"
                          color={useColorModeValue('black', 'white')}
                          _hover={{ border: '2px solid rgb(224,87,87)' }}
                          leftIcon={<MdEmail color="rgb(224,87,87)" size="20px" />}>
                          inikhilmalik@gmail.com
                        </Button>
                        </a>
                      </VStack>
                    </Box>
                    <HStack
                      mb={{ base:5,md:0 }}
                      spacing={5}
                      px={12}
                      alignItems="flex-start">
                      {/* <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        bg="black"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      /> */}
                       <a href="https://github.com/inikhilmalik" id="contact-github" target="blank" >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="md"
                        bg="black"
                        isRound={true}
                        _hover={{ bg: 'rgb(224,87,87)'}}
                        icon={<BsGithub size="24px" />}
                      />
                      </a>
                      <a href="https://www.linkedin.com/in/inikhilmalik/" id="contact-linkedin" target="blank" >
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="md"
                        bg="black"
                        isRound={true}
                        _hover={{ bg: 'rgb(224,87,87)' }}
                        icon={<RiLinkedinFill size="28px" />}
                      />
                      </a>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8}
                     color="#0B0E3F"
                     >
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="rgb(224,87,87)">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="rgb(224,87,87)">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input onChange={(e)=>{setMail(e.target.value)}} value={mail} type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            onChange={(e)=>{setMessage(e.target.value)}} value={message}
                            borderColor="rgb(224,87,87)"
                            _hover={{
                              borderRadius: 'gray.800',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            onClick={handleClick}
                            variant="solid"
                            bg="rgb(224,87,87)"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
        </Container>
        <Flex alignItems={"center"} mb="20px" p={"5px 0px"} width={"100%"} bg={"rgb(224,87,87)"} >
          <Text margin={"auto"} color={"white"}>© Designed By Nikhil Malik | All rights reserved | 2023 </Text>
        </Flex>
    </Box>
    </>
    );
  }