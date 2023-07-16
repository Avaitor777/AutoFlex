import React from "react";
import { Button } from "../button";
import { HomePage } from "../../containers/HomePage";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Signin from "./signin";

const Bkg = styled.div`
  min-height: 100vh;
  min-width: 100%;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
   
  `};
`;

function Landing() {
  const backgroundImage = require("../../../assets/images/bgimg.svg").default;

  return <Bkg style={{ backgroundImage: `url(${backgroundImage})`, 
                       backgroundSize: 'cover', 
                       backgroundPosition: 'center', 
                       backgroundRepeat: 'no-repeat' }
                    }>
      <Signin />
    </Bkg>
  
}

export default Landing;
