import { Button, ButtonProps, Flex, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import {BiMoon } from 'react-icons/bi';

export default function DarkModeButton(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    /**
     * Ideally, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
    <Flex justifyContent="center" alignItems="center">
      <Button
        bg="none"
        borderRadius="0px"
        _hover={{bg:"rgb(224,87,87)"}}
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        {...props}>
        {colorMode === 'light' ? <BiMoon  color="black" /> : <BsSun />}
      </Button>
    </Flex>
  );
}