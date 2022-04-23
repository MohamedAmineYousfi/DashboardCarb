import Head from 'next/head'
// import Link from 'next/link'
import Layout from "../../components/Layout";
// import '../../styles/comp.module.css'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import { Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap'

export default function Login() {
  return (
      <>
        <Head className="head">
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="container">
            <div className="login-wrap">
                <Form className="form-signin">
                    <img className="mb-4" alt="" width="200" height="200" src="logoFIHUB.png" />
                    <Text fontWeight="bold" fontSize="xl" fontFamily="heading">Please sign in</Text>
                    <FormGroup>
                        <Text fontWeight="bold" fontSize="l">Email</Text>
                        <Input type="text" placeholder=" useremail@domain.com" className="mr-sm-2" />
                    </FormGroup>
                    <Divider/>
                    <FormGroup>
                        <FormLabel>
                        <Text Text fontWeight="bold" fontSize="l">Password </Text>
                        <Input type="password" placeholder=" password" className="mr-sm-2" />
                        <Divider/>
                         <div className="twobtn">   <Link href="/dashboard">
                         <Button className="btn-lg btn-block" variant="primary" bgColor={"green.400"}  >Login</Button></Link> 
                    <Button className="btn-lg btn-block" variant="primary" bgColor={"yellow.400"} >Sign In</Button></div>
               </FormLabel></FormGroup>
                </Form>
            </div>
            </div>
        </Layout> 
      </>
  )
}