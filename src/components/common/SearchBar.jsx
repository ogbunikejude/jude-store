import { InputGroup, InputLeftElement, Input,Popover,PopoverArrow,
    PopoverTrigger,PopoverContent,Portal, PopoverCloseButton, PopoverBody,PopoverHeader,IconButton } from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as SearchIcon} from '../../assets/icons/SearchIcon.svg'

function SearchBar() {
    return (
        <Popover w="300px">
  <PopoverTrigger>
  <IconButton icon={<SearchIcon style={{width:'2rem'}} />} />
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Search for Products</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <InputGroup>
    <InputLeftElement
     children={<SearchIcon style={{width: '2rem'}} />}
    />
    <Input type="Search" placeholder="Search Products" fontSize="1.4rem" />
  </InputGroup>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
        
    )
}

export default SearchBar
