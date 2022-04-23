import React from "react"
import { Link, Box, Flex, Text, Button, Stack ,InputGroup,Input,InputLeftElement,InputRightElement} from "@chakra-ui/react";

export default function SearchBar (props) {
  return (
<InputGroup size='lg'>
<InputLeftElement
  pointerEvents='none'
  color='gray.300'
  fontSize='1.2em'
  children='$'
/>
<Input placeholder='Search something' />
<InputRightElement
//  children={<CheckIcon color='green.500' />}
  >
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.599 5.055c-.197.07-.42.273-.515.465-.105.213-.113.6-.017.799.036.076 1.769 1.964 3.85 4.196 2.572 2.758 3.814 4.117 3.876 4.242l.092.185.02 4.804c.02 4.734.02 4.807.1 4.942.09.153.367.312.545.312.256 0 .37-.108 1.7-1.617 1.639-1.859 1.571-1.779 1.71-2.025l.114-.205.02-3.106.02-3.105.106-.199c.071-.133 1.337-1.519 3.834-4.195 2.05-2.199 3.771-4.06 3.825-4.137.143-.204.163-.633.041-.88-.105-.215-.34-.423-.548-.484-.227-.068-18.585-.06-18.773.008z" fill="#5EBABB"/>
</svg>

        </InputRightElement>
</InputGroup>   
  )
}
;
