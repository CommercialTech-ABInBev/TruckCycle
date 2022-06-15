import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import OnboardingPage from './components/pages/OnboardingPage/OnboardingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
