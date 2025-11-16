import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home'
import About from './components/About'
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/git" element={<Github />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
