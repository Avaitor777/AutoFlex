import react from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";
import {  useNavigate } from 'react-router-dom';

const NavBarContainer = styled.div`
    min-height: 68px;
    color:azure;
    ${tw`
        w-full 
        max-w-screen-Zxl //1536px for Zxl (screen)
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `};
`;


const LogoContainer = styled.div``;

export function NavBar() {
    const navigate= useNavigate();
    const logOut =() =>
    {
        localStorage.clear()
       
        navigate("/")
    }
    return (
    <NavBarContainer>
        <LogoContainer>
            <Logo color={"dark"} />
        </LogoContainer>
        <NavItems />
        <button onClick={logOut}>Log Out</button>

    </NavBarContainer>

    );
}