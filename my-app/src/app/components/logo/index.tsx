import React from "react";

import CarlogoImg from "../../../assets/images/car-logo.png";
import tw from "twin.macro";
import styled from "styled-components";

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center

    `};
`;

const LogoText = styled.div`
    ${tw`
        text-xl
         md:text-2xl
         font-bold
         text-black
         m-1

    `};
`;

const Image = styled.div`
    
    width: auto;
    ${tw`h-6 md:h-9`};
    img { 
        width: auto;
        height: 100%;

    }


`;

export function Logo() {
    return <LogoContainer>
        <image>
            <img src={CarlogoImg} />
        </image>
        <LogoText>company name </LogoText>
    </LogoContainer>

}