import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import OnboardingPage from './components/pages/OnboardingPage/OnboardingPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import SignupPage from './components/pages/SignupPage/SignupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
