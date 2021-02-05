import { Box, Heading,Text } from '@chakra-ui/react'
import React from 'react'
// import {ReactComponent as MenuIcon} from '../../assets/icons/MenuIcon.svg'
import MenuBar from '../common/MenuBar'

function SideBar() {
    return (
        <Box width="270px" minH="100vh">
            <Box align="left" px="60px" lineHeight="40px">
                <Box w="100%" display="flex" mt="40px">
                <MenuBar />
                <Text mt="-8px" ml="10px" fontWeight="500">MENU</Text>
                </Box>
                <Heading fontSize="2.8rem" my="50px"> Our Products</Heading>
                <Heading fontSize="1.8rem">Catalogue</Heading>
                <Text> COFFEE MAKER </Text>
                <Text> DISH WASHER </Text>
                <Text> DEEP FRYER </Text>
                <Text> ELECTRIC KETTLE </Text>
                <Text> IRON </Text>
                <Text> MICROWAVE </Text>
                <Text> HAIR DRYER </Text>
                <Text fontWeight="700"> BLENDER </Text>
                <Box px="20px"> 
                <Text>Ninja</Text>
                <Text>Hamilton</Text>
                <Text>Oster</Text>
                <Text>Continental</Text>
                <Text>Americana</Text>
                <Text>Smeg</Text>
                </Box>
                <Text>MIXER</Text>
                <Text>OVEN</Text>
                <Text>REFRIGERATOR</Text>
                <Text>TOASTER</Text>

            </Box>
        </Box>
    )
}

export default SideBar
