import React, { useState } from "react";

import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";


const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1 
        pr-2 
        pl-2           // all of padding adjustment
        md:pt-2 
        md:pb-2 
        md:pl-9
        md:pr-9  
    `};
`;

// fontawesome icons 
const ItemContainer = styled.div`
    ${tw`flex relative`};
`;

const Icon = styled.span`
 ${tw`
    text-red-500 
    fill-current
    text-xs
    md:text-base
    mr-1 
    md:mr-3 
 `};
`;

// up down icon 
const SmallIcon = styled.span`
    ${tw`
        text-gray-500 
        fill-current
        text-xs
        md:text-base
        ml-1 
    `};
`;


const Name = styled.span`
    ${tw`
        text-gray-600 
        text-xs
        md:text-sm
        cursor-pointer
        select-none     //to avoid the all-selection annoying part
    `};
`;

const LineSeperator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-500 
        mr-2
        ml-2 
        md:mr-5 
        md:ml-5 
    `};
`;

const DateCalender = styled(Calendar)`
    position: absolute;
    max-width: none;
    user-select: none;     //avoid selection same as before
    top: 2em;
    left: 0;

    ${({ offset }: any) => 
    offset && 
    css`
        left: -6em;
    `};

    @media (min-width: ${SCREENS.md}) {
        top: 3.5em;
        left: -2em;

    }
` as any ;

export function BookCard() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if(isReturnCalendarOpen) setReturnCalendarOpen(false);

    };

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if(isStartCalendarOpen) setStartCalendarOpen(false);
        
    };
    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} /> 
            </Icon>
            <Name onClick={toggleStartDateCalendar}>Pick-up Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
            {isStartCalendarOpen && ( 
            <DateCalender value={startDate} onChange={setStartDate as any }/>
            )}
        </ItemContainer>
        <LineSeperator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} /> 
            </Icon>
            <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
            {isReturnCalendarOpen && ( 
            <DateCalender
                offset
            value={returnDate} 
            onChange={setReturnDate as any }/>
            )}
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em" />
        <Button text="Book your ride" />
    </CardContainer>

}