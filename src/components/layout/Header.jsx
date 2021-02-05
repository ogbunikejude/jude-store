import { Flex,Heading,IconButton,Box,Text } from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg'
import {ReactComponent as BellIcon} from '../../assets/icons/NotificationIcon.svg'
import SearchBar from '../common/SearchBar'
import DropDown from '../common/Dropdown'

function Header() {
    return (
        <Flex  h="100px" bg="#fff" justifyContent="space-between" px="40px" py="40px">
            <Heading>JUDE STORE</Heading>
            <Flex>
            <SearchBar><IconButton icon={<SearchIcon style={{width:'2rem'}} />} /></SearchBar>
            <IconButton mr="20px" ml="20px" ><BellIcon style={{width:'2rem'}} /></IconButton>
            <Box w="100%" display="flex">
            <Text mr="10px" fontSize="1.3rem" fontWeight="600" mt="8px">EN</Text>
            <DropDown />
                </Box>
            
             
            </Flex>
        </Flex>
    )
}

export default Header
