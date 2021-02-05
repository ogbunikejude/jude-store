import {  Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
    IconButton
} from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as DropdownIcon} from '../../assets/icons/DropdownIcon.svg'

function Filter() {
    return (
        <Menu closeOnSelect={false}>
  <MenuButton
    as={IconButton}
    aria-label="Options"
    icon={<DropdownIcon style={{width:'2rem'}} />}
  />
  <MenuList minWidth="240px">
    <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
      <MenuItemOption value="asc">Ascending</MenuItemOption>
      <MenuItemOption value="desc">Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title="Products" type="checkbox">
      <MenuItemOption value="name">Name</MenuItemOption>
      <MenuItemOption value="price">Price</MenuItemOption>
      <MenuItemOption value="sale_price">Sale_price</MenuItemOption>
      <MenuItemOption value="description">Description</MenuItemOption>
      <MenuItemOption value="category">Category</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
    )
}

export default Filter
