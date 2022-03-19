import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon 
            as={FaFacebookF} boxSize="50" _hover={{ bg: 'yellow.400', 
            borderRadius: '20px', width:"50px" }}/>
            <Icon as={FaGoogle} boxSize="50" _hover={{ bg: 'yellow.400', 
            borderRadius: '20px', width:"50px" }}/>
            <Icon as={FaSpotify} boxSize="50" _hover={{ bg: 'yellow.400', 
            borderRadius: '20px', width:"50px" }}/>
            
        </HStack>
    )
}

export default Social