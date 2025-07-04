import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetailsPage from './pages/BookDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;



