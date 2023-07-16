import React from "react";
import { Button } from "../button";
import { HomePage } from "../../containers/HomePage";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Signin from "./signin";
import smoke from "../../../assets/images/smoke.svg";
import car from "../../../assets/images/Car.png"
import { SCREENS } from "../../components/responsive";
import autoflex from "../../../assets/images/AutoFlex.svg"

const Bgcontainer =  styled.div `
min-height: 100vh;
min-width: 100%;
${tw`
w-1/2 
flex
relative
`};

`
const RCon = styled.div `
width: 50vw;
height: 100vh;
position: relative;
padding-top:10rem;
padding-right:5rem;
padding-bottom: 5rem;
display: flex;
align-item:center;
flex-direction:column;
justify-content: space-around;


`
const Smoke =styled.div `
width: 50vw;
height: 100vh;
position: relative;

display: flex;
flex-direction:column;
                      //used css...

img.smoke {
    position:absolute;
    display: flex;
    left:0px;
    bottom:0px;
    min-width: 60rem ;
    height: ;
 
    z-index:1;
 }
 img.car {
   position:absolute;
   left:0px;
   bottom:0px;
   width: 100;
   height: auto;
   max-height: max-content;
   z-index:2;
}

 @media (min-width: ${SCREENS.sm}) {
    width: 
    max-height: 
   
   
 }

 @media (min-width: ${SCREENS.lg}) {
    width:
    max-height: 
   
   
 }

 @media (min-width: ${SCREENS.xl}) {
    width: 
    max-height: 
   
    
 }
`;
function Landing() {
  const gradient = 'linear-gradient(180deg, #151515 0%, rgba(60.76, 58.08, 58.08, 0.79) 32%, rgba(117.07, 114.83, 114.83, 0.72) 53%, #363636 66%, #141414 93%)';

  
    return <Bgcontainer style= {{background: gradient}}  >
      <Smoke>
       <img  src={smoke} className="smoke"/>
       <img src= {car} className="car" />
        </Smoke>

      <RCon>
       <img src={autoflex} className="autoflex"/>  
      <Signin />
      </RCon>  
    </Bgcontainer>
}
  
  export default Landing;