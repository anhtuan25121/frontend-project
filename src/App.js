import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blogs from './pages/Blogs/Blogs';
import Wishlist from './pages/Wishlist/Wishlist';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<OurStore />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<SingleBlog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
