import React, { useEffect, useState } from 'react'
import './Styles.css'
import Dropdown from './Dropdown/Dropdown';
import {Link, NavLink} from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const [sticky, setSticky] = useState(false)

    const [openDropdown, setOpenDropdown] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);

    return (
    <nav className={`container1 ${menuOpen || sticky ? 'dark-nav' : ''}`}>
        <Link to="/" className='title'><img src="src/assets/img/logo.png" alt="" /></Link>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/partners" onMouseOver={() => setOpenDropdown((prev) => !prev)} onMouseOut={() => setOpenDropdown((prev) => !prev)}>Partners<RiArrowDropDownLine className='dropdown-icon'/></NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
        </ul>
        { openDropdown && <Dropdown/>}
      </nav>
    );
};
