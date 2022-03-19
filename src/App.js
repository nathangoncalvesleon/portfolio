import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Heading,
  Spacer
} from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/button";

import { useColorMode } from "@chakra-ui/color-mode";

import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header/header";
import Profile from "./components/Profile/profile";
import Social from "./components/Social/social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "white";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml='8' size='md' fontWeight='semibold' color="cyan.400">Nathan Gonçalves</Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
      
    </VStack>
  );
}

export default App;
