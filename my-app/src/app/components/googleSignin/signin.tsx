import React, { useState, useEffect } from "react";
import {auth, provider} from '../../../lib/firebase';
import {signInWithPopup} from 'firebase/auth';
import { IoLogoGoogle } from 'react-icons/io';

import { app } from "../../../lib/firebase";
import { Button } from "../button";

import tw from "twin.macro";

import styled, { keyframes } from "styled-components";
import {  useNavigate } from 'react-router-dom';
import { getParsedCommandLineOfConfigFile } from "typescript";


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


const Btn = styled.span`
   
  ${tw`
    p-5
    
    rounded-full
    flex items-center justify-center
    text-gray-600 
    text-xs
    md:text-sm
    cursor-pointer
    select-none     //to avoid the all-selection annoying part
    bg-white
    hover:w-full
  `}
  animation: ${fadeIn} 1s;
  ;
`;
const Container = styled.div`
  min-height: 4.3em;
  max-width:100%;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    pl-5
    pr-5
    flex
    rounded-full
    justify-center
    items-center
    bg-teal-500
  `};
  
`;



 function Signin() {
  const navigate = useNavigate();
  const [Value, setValue] = useState('');
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const email = data.user?.email; // Access the email property using optional chaining
        if (email) {
          setValue(email);
          localStorage.setItem("email", email);
          navigate("/HomePage")
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(()=>{
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);
    }
  }, []);

  return  <Container>
     
     {(!Value) && (<Btn onClick={handleClick}><IoLogoGoogle /> <h1>Signin With Google</h1> </Btn>)
     
}
    </Container>
   
  
}

export default Signin;