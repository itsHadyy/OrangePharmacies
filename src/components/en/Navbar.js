import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="navbar">
            <img src={logo} className="logo" alt="logo" />
            <FaBars className="burger-icon" onClick={toggleMenu} />

            <nav ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <FaTimes className="close-icon" onClick={toggleMenu} />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/insurance">Insurance Companies</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;