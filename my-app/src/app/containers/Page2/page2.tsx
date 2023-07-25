import React from "react";
//import { Button } from "../button";
import { HomePage } from "../HomePage";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";

const Bkg = styled.div`
  min-height: 100vh;
  min-width: 100%;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    //items-center
   
  `};
`;


const Contain = styled.div`
  min-height: 50vh;
  min-width: 60vw;
  //box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);     --its commented (shadow box)
  ${tw`
  justify-center
  items-center
  bg-white
  `};
`;

const PageContainer = styled.div`
 
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `};
`;


 function page2() {
 // const backgroundImage = require("").default;
  return (
    <PageContainer>
    <Bkg style={{ backgroundColor: 'white' , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
     <Contain > 

     </Contain>
    </Bkg>
  </PageContainer>
)}

export default page2;
