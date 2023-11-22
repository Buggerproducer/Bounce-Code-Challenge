import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component
import Home from './Page/home';
import CountryDetail from './Page/details';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
