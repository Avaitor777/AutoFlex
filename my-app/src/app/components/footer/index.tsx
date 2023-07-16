import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
   // min-height: 24em;
    background-color: #1d2124;
    ${tw`
        flex
        flex-col
        min-w-full
        pt-10 
        md:pt-16  
        items-center
        justify-center
    `};
`;

const InnerContainer  = styled.div`
    ${tw`
        flex
        w-full
        h-full
        max-w-screen-Zxl
        flex-wrap   //to wrap up(phone based)

    `};
`;

const BottomContainer = styled.div`
    ${tw`
    w-full
    flex
    max-w-screen-Zxl
    justify-center
    md:justify-start
    mt-7
    md:mt-1 
    `};
`;

const CopyrightText = styled.span`
    font-size: 12px;
    ${tw`
        text-gray-300           //color*
    `}
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2 
        md:mr-16 
        pl-10
        pr-10 
        md:pl-3 
        md:pl-3 
    `};
`;

const AboutText = styled.p`
    ${tw`
        text-white                      //color*
        text-sm
        font-normal
        max-w-xs
        leading-5 
        mt-2 
        ml-3
    `};
`;

const SectionContainer = styled.div`
    ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2 
        md:mr-12
        pl-10 
        pr-10 
        md:pl-3 
        md:pl-3 
        mt-7  
        md:mt-0 
    `};
`;

const LinkedList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

//specfically for the hypelink mods
const ListItem = styled.li`
    ${tw`
        m-3        
    `};

    & > a {
        ${tw`
            text-xs
            text-white                      //color*
            transition-all
            hover:text-gray-200 
        `};
    }
`;

const HeaderTitle = styled.div`  //hyper-headers mod
    ${tw`
        text-2xl 
        font-bold
        text-white                      //color*
        mb-3

    `};
`;

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
    `};
`;

const RedIcon = styled.h3`
    ${tw`
        w-10
        h-10  
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white                      //color*
        text-base
        mr-2 
    `};
`;

// for phone, email , ETC..
const SmallText = styled.h6`
      ${tw`
        text-sm
        text-white                          //color*
      `};
`;
export function Footer() {
    return <FooterContainer>
        <InnerContainer>
        <AboutContainer>
            <Logo color="white" bgColor="dark"/>
            <AboutText>Yourcar is a car renting  company located in many countries 
                    accrosxs the workd which has high quakity cars and servics 
                    for your rented car.
            </AboutText>
        </AboutContainer>
        <SectionContainer>
        <HeaderTitle>our links</HeaderTitle>
        <LinkedList>
            <ListItem><a href="#">Home</a></ListItem>
            <ListItem><a href="#">About Us</a></ListItem>
            <ListItem><a href="#">Services</a></ListItem>
            <ListItem><a href="#">Models</a></ListItem>
            <ListItem><a href="#">Blog</a></ListItem>


        </LinkedList>
        </SectionContainer>
        <SectionContainer>
        <HeaderTitle>other links</HeaderTitle>
        <LinkedList>
            <ListItem><a href="#">FAQ</a></ListItem>
            <ListItem><a href="#">Contact Us</a></ListItem>
            <ListItem><a href="#">Support</a></ListItem>
            <ListItem><a href="#">Privacy Policy</a></ListItem>
            <ListItem><a href="#">Terms &amp Conditions</a></ListItem>


        </LinkedList>
        </SectionContainer>
        <SectionContainer>
            <HeaderTitle>Call now</HeaderTitle>
            <HorizontalContainer>
                <RedIcon>
                    <FontAwesomeIcon icon={faPhone} />
                </RedIcon>
                <SmallText>+91 555-234-8684</SmallText>
            </HorizontalContainer>
        </SectionContainer>
                <SectionContainer>
            <HeaderTitle>Mail</HeaderTitle>
            <HorizontalContainer>
                <RedIcon>
                    <FontAwesomeIcon icon={faEnvelope} />
                </RedIcon>
                <SmallText>info@company.ac.in</SmallText>
            </HorizontalContainer>
        </SectionContainer>
        </InnerContainer>
        <BottomContainer>
            <CopyrightText>Copyright &copy; ${new Date().getFullYear()} company. All rights reserved</CopyrightText>
        </BottomContainer>
    </FooterContainer> 
}