
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
import DarkModeButton from './DarkmodeButton';
import Resume from "../Resume/Nikhil-Malik-Resume.pdf"
import {Link as LINK} from "react-scroll";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box id="nav-menu" width="100%" as="header"  zIndex={2} backgroundColor="black" position="fixed"  >
      <Flex
       
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex    flex={{ base: 4 }} justify={{ base: 'left', md: 'space-between' }}>
          <LINK to="home" smooth>
          <Text
            cursor="pointer"
            ml={{md:"160px"}}
            textAlign={useBreakpointValue({ base: 'left',sm:"center", md: 'center' })}
            fontFamily={'heading'}
            color={useColorModeValue('black', 'white')}>
          <span style={{color:"rgb(224,87,87)"}}>N</span>
          <span>IKHIL</span>
          <span style={{color:"rgb(224,87,87)"}}> M</span>
          <span>ALIK</span>
          
           </Text>
           </LINK>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={0}>

          
          <Button
            ml="35px"
            color={useColorModeValue("black","white")}
            borderRadius="0px"
            bg="none"
            _hover={{bg:"rgb(224,87,87)",color:"white"}}
            id="resume-button-1"
            onClick={()=>{window.open(`https://drive.google.com/file/d/1EhwOuiFEVKV1ZAEM6O6RT_7AIBE6KpN9/view?usp=drivesdk`)}}
            // fontSize={'sm'}
            // variant={'link'}
            >
            <a href={Resume} id="resume-link-1"  download={"Nikhil-Malik-Resume"} className="nav-link resume" target="blank" >
            Resume
            </a>
          </Button>

            <DarkModeButton />
          
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <LINK
                
                p={2}
                to={navItem.href}
                className={navItem.className}
                smooth={true}
                // href={navItem.href ?? '#'}
                // fontSize={'sm'}
                // fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: "rgb(224,87,87)",
                }}>
                  <Button variant={'link'} borderRadius="0px" _hover={{color:"rgb(224,87,87)"}} >

                  {navItem.label}
                  </Button>
              </LINK>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <LINK
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900'),color:"rgb(224,87,87)" }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </LINK>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <LINK to={navItem.href}  smooth={true}  >
          <MobileNavItem key={navItem.label} {...navItem} />
        </LINK>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        // href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          // textDecoration: 'none',
          color:"rgb(224,87,87)"
        }}>
        <Text
          // _hover={{color:"rgb(224,87,87)"}}
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <LINK key={child.label}  py={2} to={child.href} offset={50} duration={-500} smooth={true}>
                {child.label}
              </LINK>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS= [
  {
    label: 'Home',
    href: 'home',
    className:"nav-link home"
  },
  {
    label: 'About',
    href: 'about',
    className:"nav-link about"
  },
  {
    label: 'Project',
    href: 'projects',
    className:"nav-link projects"
  },
  {
    label: 'Skills',
    href: 'skills',
    className:"nav-link skills"
  },
  {
    label: 'Contact',
    href: 'contact',
    className:"nav-link contact"
  },
];

// import {
//     Box,
//     Flex,
//     Text,
//     IconButton,
//     Button,
//     Stack,
//     Collapse,
//     Icon,
//     Link,
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     useColorModeValue,
//     useBreakpointValue,
//     useDisclosure,
//   } from '@chakra-ui/react';
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from '@chakra-ui/icons';
  
//   export default function Navbar() {
//     const { isOpen, onToggle } = useDisclosure();
  
//     return (
//       <Box id="nav-menu" >
//         <Flex
//           bg={useColorModeValue('white', 'gray.800')}
//           color={useColorModeValue('gray.600', 'white')}
//           minH={'60px'}
//           px={{ base: "11%" }}
//           // borderBottom={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.900')}
//           align={'center'}>
          
//           <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
//             <Text
//               textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//               fontFamily={'heading'}
//               color={useColorModeValue('gray.800', 'white')}>
//               NIKHIL MALIK
//             </Text>
//           </Flex>
  
//           <Stack
//           className="nav-link home"
//             direction={'row'}
//             spacing={{sm:2,md:12}}>
//             <Button
//               color={"black"}
//               as={'a'}
//               variant={'link'}
//               href={'#'}>
//               Home
//             </Button>
//             <Button
//               className="nav-link skills"
//               color={"black"}
//               as={'a'}
//               variant={'link'}
//               href={'#'}>
//               Skills
//             </Button>
//             <Button
//               className="nav-link projects"
//               color={"black"}
//               as={'a'}
//               variant={'link'}
//               href={'#'}>
//               Projects
//             </Button>
//             <Button
//               className="nav-link contact"
//               color={"black"}
//               as={'a'}
//               variant={'link'}
//               href={'#'}>
//               Contact
//             </Button>
//             <Button
//               className="nav-link about"
//               color={"black"}
//               as={'a'}
//               variant={'link'}
//               href={'#'}>
//               About
//             </Button>
//             <Button
//               className="nav-link resume"
//               color={"black"}
//               as={'a'}
//               variant={'link'}
//               href={'#'}>
//               Resume
//             </Button>
           
//           </Stack>
//         </Flex>
  
         
//       </Box>
//     );
//   }
  
//   const DesktopNav = () => {
//     const linkColor = useColorModeValue('gray.600', 'gray.200');
//     const linkHoverColor = useColorModeValue('gray.800', 'white');
//     const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
//     return (
//       <Stack direction={'row'} spacing={4}>
        
//           <Box >
//             <Popover trigger={'hover'} placement={'bottom-start'}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={'#'}
//                   fontSize={'sm'}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: 'none',
//                     color: linkHoverColor,
//                   }}>
                 
//                 </Link>
//               </PopoverTrigger>
  
             
//                 <PopoverContent
//                   border={0}
//                   boxShadow={'xl'}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={'xl'}
//                   minW={'sm'}>
//                   <Stack>
                    
//                   </Stack>
//                 </PopoverContent>
             
//             </Popover>
//           </Box>
       
//       </Stack>
//     );
//   };
  
  