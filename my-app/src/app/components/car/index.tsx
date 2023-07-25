import React from "react";
import { ICar } from "../../../typings/car";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faEllipsisH, faFillDrip, faTachometer, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

interface ICarProps extends ICar {

}

const CarContainer = styled.div`
    width: 16.5em;
    min-height: 23em;
    max-height: 23em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4); 

    ${tw`
        flex
        flex-col
        items-center
        p-3 
        bg-white
        rounded-md
        m-1
        sm:m-3 
        md:m-6 
    `};
`;

const CarThumbnail = styled.div`
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }
`;

const CarName = styled.h3`
    ${tw`
        text-base
        font-bold
        text-black                          //color*
        mt-1 
        mb-1 
    `};
`;

const PricesContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-start
        mt-3 
    `};
`;

const SmallText = styled.p`
    color: inherit;
    ${tw`
        inline-flex
        text-xs
        font-thin
    `};
`;

const DailyPrice = styled.h5`
    ${tw`
        text-red-500                //color*
        font-bold
        text-sm
        mr-3 
    `};
`;

const MonthlyPrice = styled.h5`
    ${tw`
        text-gray-500                       //color*
        font-bold
        text-sm
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-400                                  //color*
        text-sm
        mr-1 
    `};
`;

const CarDetailsContainer = styled.span`
    ${tw`
        flex
        w-full
        justify-between
    `};
`;

const CarDetail = styled.span`
    ${tw`
        flex
        items-center
    `};
`;

const CarInfo = styled.h5`
    ${tw`
       text-gray-400                                       //color*
       text-sm
    `};
`;

const Seperator = styled.div`
    min-width: 100%;
    min-height: 1px;
    ${tw`
        flex
        bg-gray-300 
        mt-2 
        mb-2 
    `};
`;

const RentButton = styled(Button)`
    ${tw`
       min-w-full
       mt-5 
    `};
`;

export function Car(props: ICarProps)  {

        const { cName, thumbnailSrc, dPrice, mPrice, mileage, gearType, gasType} = props;

        return <CarContainer>
            <CarThumbnail>
                <img src={thumbnailSrc} alt={ cName }/>
            </CarThumbnail>
            <CarName>{ cName }</CarName>
            <PricesContainer>
                <DailyPrice>${ dPrice }<SmallText>/Day</SmallText></DailyPrice>
                <MonthlyPrice>${ mPrice }<SmallText>/Month</SmallText></MonthlyPrice>
            </PricesContainer>
            <Seperator />
            <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt} />
                    </SmallIcon>
                    <CarInfo>{mileage}</CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </SmallIcon>
                    <CarInfo>{gearType}</CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faFillDrip} />
                    </SmallIcon>
                    <CarInfo>{ gasType }</CarInfo>
                </CarDetail>
            </CarDetailsContainer>
            <RentButton theme="filled" text=" Rent now" onClick={function (): void {
                    throw new Error("Function not implemented.");
                } } />                                  //button call function from button folder(entension of icarprop)

        </CarContainer>
}