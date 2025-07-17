import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import Reservation from "./pages/reservation";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import SignIn from './pages/signIn'
import SignUp from './pages/signUp';
import Cart from './pages/cart';
import './App.css';

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('bav-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('bav-cart', JSON.stringify(updatedCart));
  }
  


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
