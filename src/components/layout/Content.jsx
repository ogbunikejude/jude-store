import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Main from './Main'

function Content({children}) {
    return (
        <Box flex="1" width="100%">
            {children}             
            <Main/>
            <Footer /> 
        </Box>
    )
}

export default Content
