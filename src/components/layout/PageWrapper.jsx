import { Flex } from '@chakra-ui/react'
import React from 'react'
import Content from './Content'
// import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

function PageWrapper({children}) {
    return (
        <Flex width="100%" minH="100vh" px="8rem">
            <SideBar />
            <Content>
                <Header />
                {children}
            </Content>
        </Flex>
    )
}

export default PageWrapper
