import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import SignupPage from './pages/SignupPage/SignupPage.jsx'
export default function AppRouter() {
  
  return (
    
        <BrowserRouter>
              <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/home' element={<Home />} />
              </Routes>
        </BrowserRouter>

  );
}
