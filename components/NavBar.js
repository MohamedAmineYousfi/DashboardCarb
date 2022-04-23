import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

import Logo from "./Logo";
import Searchbar from "./SearchBar";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} >
      <Flex flex={"4"} >
        <Logo
       flexDir='row'
      //  marginTop="10"
        w="900px"
        color={["white", "white", "primary.500", "primary.500"]}
      /></Flex>


      <Flex flex={"2"} bg={"green.400"} flexDir={"row"} h={"100%"} width={'100%'}>
        <Flex flex={"2"} borderRadius={"2xl"}><img borderRaduis={"20"} className="mb-4" alt="" width="50%" height="100%" src="shargil1.jpg" /></Flex> 
        <Flex flex={"4"}  flexDir={'column'}><Flex flex={"2"}><Text>Shargiil B</Text></Flex><Flex flex={"2"}><Text>CSO</Text></Flex></Flex>
        {/* <MenuToggle toggle={toggle} isOpen={isOpen}  align={"center"}/> 
        
        <MenuItem to="/features" color={"black"} >Shargiil B </MenuItem>  */}
        </Flex>


      <Flex flex={"2"} ><MenuLinks isOpen={isOpen} /></Flex>
   
      {/* <Logo
       flexDir='row'
       marginTop="10"
        w="900px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} /> */}
    </NavBarContainer>
  );
};

const Identif = () => {
    return (
    <Flex flexDir='row' bg={"yellow.200"} w='10%'>
     <Flex bg={'red.200'} w='30%'></Flex>
     <Flex bg={'black.200'} w='70%'></Flex>
    </Flex>
  );
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" color={"green.200"} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Flex

     flexDir={'row'}
    >
      {/* <Stack
        spacing={2}
        align="center"
   
        direction={["row"]} */}
        {/* // pt={[0, 0, 0, 0]} */}
    
      {/* // > */}
        {/* <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It works </MenuItem>*/}
     <Flex flex={"2"} ml={"20"} align={"center"}><Text color={"green.400"}>Menu</Text></Flex>
 
        {/* <MenuItem to="/Menu"  ml={"24"} mr={"2"}>Menu </MenuItem> */}
      
          {/* <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            Create Account
          </Button> */}
          <Flex marginRight={'20%'} >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.22 8.98c-.724.19-1.356.76-1.669 1.504-.24.574-.231 1.584.021 2.143.243.54.69 1.02 1.184 1.271l.397.202h35.714l.397-.202c.493-.25.94-.73 1.183-1.27.252-.56.262-1.57.021-2.144a2.694 2.694 0 0 0-1.166-1.308l-.435-.233-17.704-.013c-9.737-.007-17.811.015-17.943.05zm-.106 13.505c-.643.215-1.225.755-1.544 1.431-.145.308-.178.51-.178 1.091 0 .607.03.775.202 1.132.24.501.663.958 1.136 1.229l.346.198h35.868l.384-.224c.855-.498 1.302-1.3 1.302-2.335 0-1.036-.447-1.838-1.302-2.335l-.384-.224-17.82-.014c-9.8-.008-17.904.015-18.01.05zm-.47 13.701c-1.783 1.008-1.695 3.688.152 4.692l.357.193h35.714l.435-.233a2.694 2.694 0 0 0 1.166-1.308c.241-.574.231-1.584-.02-2.143-.244-.54-.691-1.02-1.184-1.271l-.397-.202h-17.87l-17.87-.002-.484.274z" fill="#5EBABB"/>
    </svg>
          </Flex>  
          <MenuItem to="/signup" isLast>
        
        </MenuItem>
      {/* </Stack> */}
    </Flex>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      // flexDir={"row"} 
      w="100%"
      // mb={2}
      // marginBottom={8}
      bg={["primary.500", "primary.500","primary.500", "transparent", "transparent"]}
      color={["white", "white","white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;