import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/TopBar';
import UserContextProvider from './context/UserContext';
import Homepage from './pages/Homepage';
import Register from './pages/RegisterPage';
import Login from './components/Login';
import Cartelera from './components/Cartelera';
import Home from './components/Home';

const Page404 = () => <h1>404 Not Found</h1>;


function App() {
  return (
    <Router>
      <UserContextProvider>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/cartelera' element={<Cartelera />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
      </UserContextProvider>
    </Router>
    

  )
}

export default App
