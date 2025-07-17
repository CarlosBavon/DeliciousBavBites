import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import logo from '../assets/logo.svg'

function Navbar () {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen) 

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to="/"><img src={logo} alt='Delicious Bav Bites' className='logo-img'/></Link>
                <Link to="/" style={{'textDecoration': 'none'}}><span className='logo-text'>Delicious Bav Bites</span></Link>
                <button className="dark-toggle" onClick={toggleTheme}>
                    <i class="fa-solid fa-circle-half-stroke"></i>
                </button>
            </div>

            <div className='hamburger' onClick={toggleMenu}>
                ☰
            </div>

            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                
                <li><Link to="/" className='home-link' onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/menu" className='menu-link' onClick={() => setIsOpen(false)}>Menu</Link></li>
                <li><Link to='/cart' className='cart-link' onClick={() => setIsOpen(false)}><i class="fa-solid fa-cart-shopping"></i></Link></li>
                <li><Link to="/about" className='about-link' onClick={() => setIsOpen(false)}>About</Link></li>
                <li><Link to="/reservation" className='reservation-link' onClick={() => setIsOpen(false)}>Reservation</Link></li>
                <li><Link to="/contact" className='contact-link' onClick={() => setIsOpen(false)}>Contact</Link></li>
                <li><Link to="/signin" className='signin-btn' onClick={() => setIsOpen(false)}>Sign In</Link></li>
                <li><Link to="/signup" className='signup-btn' onClick={() => setIsOpen(false)}>Sign Up</Link></li>
            </ul>
            
            {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}

        </nav>
    )
}

export default Navbar