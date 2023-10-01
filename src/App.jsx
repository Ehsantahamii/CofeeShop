import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage'
import Menu from './pages/Menu';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/منو' Component={Menu} />
      </Routes>
      <MainPage />
      <Footer />
    </>
  )
}

export default App
