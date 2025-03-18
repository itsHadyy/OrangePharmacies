import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const location = useLocation();

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

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Locations", path: "/locations" },
        { name: "Shop", path: "/shop" },
        { name: "Services", path: "/services" },
        { name: "Insurance Companies", path: "/insurance" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <header className="navbar">
            <Link to="/">
                <img src={logo} className="logo" alt="Orange Pharmacies Logo" />
            </Link>
            <FaBars className="burger-icon" onClick={toggleMenu} />

            <nav ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <FaTimes className="close-icon" onClick={toggleMenu} />
                <ul>
                    {navLinks.map(({ name, path }) => (
                        <li key={path}>
                            {location.pathname === path ? (
                                <span className="active-link">{name}</span>
                            ) : (
                                <Link to={path} onClick={toggleMenu}>{name}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;