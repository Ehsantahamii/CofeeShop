import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';

// import MainPage from './pages/MainPage'
import Menu from './pages/Menu';
import Footer from './components/Footer/Footer'

import ProductCoffee from './pages/productCoffee';

function App() {

  return (
    <>
      <Routes>
        <Route path='/منو' Component={Menu} />
        <Route path='/قهوه' Component={ProductCoffee} />        
      </Routes>
      <ProductCoffee/>
      <Footer />
    </>
  )
}

export default App
