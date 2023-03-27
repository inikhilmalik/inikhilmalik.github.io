import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box border="1px solid black">
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          px={{ base: "11%" }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          
          <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              NIKHIL MALIK
            </Text>
          </Flex>
  
          <Stack
            direction={'row'}
            spacing={{sm:2,md:12}}>
            <Button
              color={"black"}
              as={'a'}
              variant={'link'}
              href={'#'}>
              Home
            </Button>
            <Button
              color={"black"}
              as={'a'}
              variant={'link'}
              href={'#'}>
              Skills
            </Button>
            <Button
              color={"black"}
              as={'a'}
              variant={'link'}
              href={'#'}>
              Projects
            </Button>
            <Button
              color={"black"}
              as={'a'}
              variant={'link'}
              href={'#'}>
              Contact
            </Button>
            <Button
              color={"black"}
              as={'a'}
              variant={'link'}
              href={'#'}>
              About
            </Button>
            <Button
              color={"black"}
              as={'a'}
              variant={'link'}
              href={'#'}>
              Resume
            </Button>
           
          </Stack>
        </Flex>
  
         
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        
          <Box >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={'#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                 
                </Link>
              </PopoverTrigger>
  
             
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    
                  </Stack>
                </PopoverContent>
             
            </Popover>
          </Box>
       
      </Stack>
    );
  };
  
  