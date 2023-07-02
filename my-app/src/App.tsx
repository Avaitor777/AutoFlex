import React from 'react';
import './App.css';
import styled from 'styled-components';
import { HomePage } from './app/containers/HomePage';
import tw from 'twin.macro';
import Landing from './app/components/googleSignin/LandingPage'
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const AppContainer  = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  `}
  
`;


function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<Landing />}/>
  <Route path='/HomePage' element={<HomePage/>} />
  </Routes>
  
  
  </BrowserRouter>
  
  
}

export default App;
