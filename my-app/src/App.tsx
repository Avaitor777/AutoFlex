import React from 'react';
import './App.css';
import styled from 'styled-components';
import { HomePage } from './app/containers/HomePage';
import tw from 'twin.macro';



const AppContainer  = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  `}
  
`;



function App() {
  return <AppContainer>
    <HomePage />
  </AppContainer>
}

export default App;
