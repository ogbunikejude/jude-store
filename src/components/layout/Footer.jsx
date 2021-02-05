import { Box, Flex, Heading, HStack,Text,VStack,Input,Button } from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook icon.svg'
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter icon.svg'
import {ReactComponent as PinterestIcon} from '../../assets/icons/pinterest icon.svg'

function Footer() {
    return (
        <Flex W="100%" h="100px" px="100px" py="20px" justifyContent="space-between">
            <Box>
            <Text fontSize="1.4rem" fontWeight="700">NEWS</Text>
            <Text fontSize="1.4rem" fontWeight="700">CATALOGUE</Text>
            <Text fontSize="1.4rem" fontWeight="700">CONTACTS</Text>
            </Box>
            <Box>
            <Text fontSize="1.4rem" fontWeight="700">ABOUT US</Text>
            <Text fontSize="1.4rem" fontWeight="700">DELIVERY</Text>
            <Text fontSize="1.4rem" fontWeight="700">FAQ</Text>
            </Box>
            <Box>
            <Heading>JUDE STORE</Heading>
            <HStack spacing={10}>
            <FacebookIcon style={{width:'2rem'}} />
            <TwitterIcon style={{width:'2rem'}} />
            <PinterestIcon style={{width:'2rem'}} />
            </HStack>
            </Box>
             <VStack spacing={1} align="left">
              <Input variant="outline" placeholder="Enter your Email" fontSize="1.4rem" />
              <Button variant="solid" fontSize="1.4rem">
                   SUBSCRIBE
              </Button>
               </VStack>
            
        </Flex>
    )
}

export default Footer
