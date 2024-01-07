import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

import './App.css';
import './index.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;