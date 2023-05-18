import react from "react";
import styled from "styled-components";     
import tw from "twin.macro";
import { NavBar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { BookingSteps } from "./bookingSteps";

const PageContainer = styled.div`
${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`;

export function HomePage() {
    return <PageContainer>
        <NavBar />
        <TopSection />
        <Marginer direction="vertical" margin="25em" />
        <BookCard />
        <Marginer direction="vertical" margin="7em" />
        <BookingSteps />
    </PageContainer>

}





