import { Box,Text,Image } from '@chakra-ui/react'
import {React,useState,useEffect} from 'react'
import Filter from '../common/Filter'
import Axios from 'axios'

function Main() {
    const [products,setProducts] = useState([])
    useEffect (()=> {
        Axios.get('https://cors-anywhere.herokuapp.com/https://judeecommerceapinodejs.herokuapp.com/product')
        .then((res)=> {
            setProducts(res.data)
        }).catch(err=> console.log({err}))
    }, []) 

    return (
       <Box px={["5px","20px","30px","40px"]} w={["100%","50%","100%","100%"]} minH="100vh">
           <Box w="100%" display="flex" my="20px">
                <Text  mr="10px" fontWeight="500">SORT BY:</Text>
                <Filter />
                </Box>
                {products ? products.map((product)=> { return (
                    < Box w={["100%","50%","100%","100%"]} display="flex">
                     <Image
                      borderRadius="10px"
                      boxSize="200px"
                      src={product.image}
                      alt="Blender"
                      px="20px"
                      lineHeight="20px"
                  />
                     <Box>
                     <Text fontSize="1.6rem" fontWeight="500">{product.categories}</Text>
                     <Text fontSize="1.6rem" fontWeight="700" my="10px">{product.name}</Text>
                     <Text fontSize="1.4rem" >{product.description}</Text>
                     <Text fontSize="1.4rem" fontWeight="700" my="10px">{product.price}</Text>
                      <div className="Strike">
                      <p>{product.sale_price}</p>
                      </div>
                     </Box>
                  </ Box>

                )}):<p>...Loading</p>}
                
       </Box>
    )
}

export default Main
