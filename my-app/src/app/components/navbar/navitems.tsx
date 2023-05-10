import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;

const NavItem = styled.li<{ menu?: any }>` // single item having these featues

    ${tw`
        text-sm   // starting with reference to phone
        md:text-base
        text-black
        font-medium
        mr-1 
        md:mr-5 
        cursor-pointer
        transition
        duration-300 // for transition timing
        ease-in-out
        hover:text-gray-700 
    `};

    ${( { menu }) => menu && css`
        ${tw`
            text-white
            text-xl
            mb-3  //margin bottom 
            focus:text-white
        `};
    `};
`;


export function NavItems() {

const isMobile =  useMediaQuery({ maxWidth: SCREENS.sm });
    
    if(isMobile)
        return (
            <Menu right styles={menuStyles}>
            <ListContainer>
            <NavItem menu>
                <a href="#">Home</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Cars</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Services</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Contact</a>
            </NavItem>
        </ListContainer>
        </Menu>
        );

    return ( 
    <ListContainer>
        <NavItem>
            <a href="#">Home</a>
        </NavItem>
        <NavItem>
            <a href="#">Cars</a>
        </NavItem>
        <NavItem>
            <a href="#">Services</a>
        </NavItem>
        <NavItem>
            <a href="#">Contact</a>
        </NavItem>
    </ListContainer>
    )
}