import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { cardCollection } from "../../../lib/controller";


const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4 
        pl-4 
        md:pl-0 
        md:pr-0 
        mb-10 

    `};
`;

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-5xl 
        text-black
        font-black
    `};
`;

// always on mobile first approch 
const CarsContainer = styled.div`
    ${tw`
        w-full
        flex-wrap
        items-center
        flex
        flex-col
        items-center
        justify-center
        mt-7
        md:mt-10 
    `};
`;

export function TopCars() {
    const [current, setCurrent] = useState([]);

    const isMobile =  useMediaQuery({ maxWidth: SCREENS.sm });
    
    const [card, setCard] =useState<ICar[]>([])
    const testCar=card;
    useEffect(()=> onSnapshot(cardCollection,(snapshot: 
        QuerySnapshot<DocumentData>)=>{
      
        setCard(
            snapshot.docs.map((doc) => {
                return{
                 id: doc.id,
                 ...doc.data(),
                };
                 })
        )
     //store the value in testCar
     testCar.push(...snapshot.docs.map((doc)=>doc.data()));
    }), []);

    console.log(card,"card")
    
    
     
      const cars = testCar.map((car)=><Car {...car} />)
    
      const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
      const slidesToShow = isMobile ? 1 : 3;
      const totalSlides = cars.length;
      const getSlides = () => {
        const slides = [];
        let startIndex = 0;
        while (startIndex < totalSlides) {
          slides.push(
            <div key={startIndex} style={{display:'flex',flexDirection:'row'}}>
              {cars.slice(startIndex, startIndex + slidesToShow)}
            </div>
          );
          startIndex += slidesToShow;
        }
        return slides;
      };
    

      return (
        <TopCarsContainer>
          <Title>Explore our top deals</Title>
          <CarsContainer > 
          <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          swipeable={true}
          infiniteLoop={true}
        >
          {getSlides()}
          
        </Carousel>
            
          </CarsContainer>
        </TopCarsContainer>
      );
    }
   
 /*   <Carousel
              value={current}
              onChange={setCurrent}
              slides={cars}
              plugins={[
                "clicktochange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ]}
              breakpoints={{
                640: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                  ],
                },
                900: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                  ],
                },
              }}
            />
    <Dots value={current} onChange={setCurrent} number={numberOfDots} />
    */
    
    
    