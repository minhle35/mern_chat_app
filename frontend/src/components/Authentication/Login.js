import React, {useState} from 'react'
import {FormControl, FormLabel, InputRightElement, VStack, Button, InputGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
const Login = () => {

  const [show, setShow] = useState(false);
  const showButtonHandle = () => setShow(!show);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState('');

  return (
    <VStack>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter your name" 
        onChange={e =>setName(e.target.value)}/>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your email" 
        onChange={e =>setEmail(e.target.value)}/>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input type={show? "text" : "password"} placeholder="Enter your password" 
        onChange={e =>setPassword(e.target.value)}/>
        <InputRightElement width="3.8rem">
          <Button height="1rem" size="sm" onClick={showButtonHandle}>
          {show ? "Hide" : "Show"}
          </Button>
        
        
        </InputRightElement>
        </InputGroup>
        <FormLabel>Reenter the password</FormLabel>
        <Input placeholder="Reenter your password" 
        onChange={e =>setConfirmPassword(e.target.value)}/>
        <FormLabel>Profile picture</FormLabel>
        <Input placeholder="Upload your profile picture" 
        onChange={e =>setPic(e.target.value)}/>

     
      </FormControl>
    
  </VStack>
  )
}

export default Login