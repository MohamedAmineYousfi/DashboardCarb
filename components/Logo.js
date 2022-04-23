import React from "react"
import { Box, Text ,Flex} from "@chakra-ui/react"
import SearchBar from "./SearchBar"
export default function Logo(props) {
  return (
    <Flex {...props}>
        <Flex flexDir="row"  w="40%">
<img className="mb-4" alt="" width="200" height="200" src="logocarb.jpg" /></Flex>

<Flex  marginLeft='10' w="60%" marginTop="2">
   <SearchBar width="900"/> 
</Flex>
    </Flex>
  )
}