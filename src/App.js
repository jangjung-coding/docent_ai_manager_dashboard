import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenets/Header';
import SignLogin from './pages/SignLoginPage';
import EnrollMuseumPage from './pages/EnrollMuseumPage';
import EnrollPaintingPage from './pages/EnrollPaintingPage';
import SurveyResultPage from './pages/SurveyResultPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SignLogin />} />
        <Route path="/enrollMuseum" element={<EnrollMuseumPage />} />
        <Route path="/enrollPainting" element={<EnrollPaintingPage />} />
        <Route path="/surveyResult" element={<SurveyResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
