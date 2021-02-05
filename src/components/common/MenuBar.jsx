import { Menu, MenuButton,IconButton,MenuList,MenuItem} from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as MenuIcon} from '../../assets/icons/MenuIcon.svg'

function MenuBar() {
    return (
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label="Options"
    icon={<MenuIcon style={{width:'2rem'}} />}
  />
  <MenuList>
    <MenuItem>Home</MenuItem>
    <MenuItem >Our Products</MenuItem>
    <MenuItem >Order</MenuItem>
    <MenuItem >Log in</MenuItem>
    <MenuItem >Sign Up</MenuItem>
  </MenuList>
</Menu>
    )
}

export default MenuBar
