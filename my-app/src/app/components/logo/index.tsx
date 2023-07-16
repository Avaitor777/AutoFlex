import React from "react";

import CarlogoImg from "../../../assets/images/car-logo.png";
import tw from "twin.macro";
import styled from "styled-components";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}

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
         text-black                         //color*
         m-1
     `};
     ${({ color }: any) => color === "white" ? tw`text-white` : tw`text-black` }
`as any;

const image = styled.div`
    
    width: auto;
    ${tw`h-6 md:h-9`};
    img { 
        width: auto;
        height: 100%;

    }


`;

export function Logo(props: ILogoProps) {
    const { color, bgColor } = props

    return <LogoContainer>
        <image>
            <img src={bgColor === "dark" ? CarLogoDarkImg : CarlogoImg} />
        </image>
        <LogoText color={color || "dark"}>company name </LogoText>
    </LogoContainer>

}