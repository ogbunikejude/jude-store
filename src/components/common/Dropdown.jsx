import { Menu, MenuButton,IconButton,MenuList,MenuItem} from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as DropdownIcon} from '../../assets/icons/DropdownIcon.svg'

function DropDown() {
    return (
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label="Options"
    icon={<DropdownIcon style={{width:'1rem'}} />}
  />
  <MenuList>
    <MenuItem>EN</MenuItem>
    <MenuItem >Fren</MenuItem>
    <MenuItem >GER</MenuItem>
    <MenuItem >Spanish</MenuItem>
  </MenuList>
</Menu>
    )
}

export default DropDown