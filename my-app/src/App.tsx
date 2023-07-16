import React from 'react';
import './App.css';
import styled from 'styled-components';
import { HomePage } from './app/containers/HomePage';
import tw from 'twin.macro';
import Landing from './app/components/googleSignin/Test'
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return <BrowserRouter>
  <Routes>
  <Route path='/' element={<Landing />}/>
  <Route path='/HomePage' element={<HomePage/>} />
  </Routes>
  
  
  </BrowserRouter>
  
  
}

export default App;
