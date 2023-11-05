import React from 'react';
// import { router } from './routes/routes';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


import Page404 from './components/404/Page404'
import MainPage from './pages/MainPage'
import Menu from './pages/Menu'
import ProductCoffee from './pages/ProductCoffee';
import OrderBox from './pages/OrderBox';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />

      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="" element={<MainPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="menu/coffee" element={<ProductCoffee />} />
        <Route path="/orders" element={<OrderBox />} />


      </Routes>
      <Footer />
    </main>
  )
}

export default App
