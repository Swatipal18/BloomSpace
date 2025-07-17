import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from "../../../assets/Logo/logo_blooming space_1.png";
import logo2 from "../../../assets/Logo/logo_blooming space_White.png";
import logo3 from "../../../assets/Logo/logo_blooming space_Black.png";
import img from "../../../assets/modern-styled-entryway-min.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Check if current path is /Service
    const isServicePage = /^\/Work\/[^\/]+$/.test(location.pathname);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsMenuOpen(false);
    };

    // Function to handle smooth scroll to contact form
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactElement = document.getElementById('contact-form');
        if (contactElement) {
            contactElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeModal(); // Close the menu after clicking
    };

    // Effect to handle body scroll lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Header */}
            <header className={styles.header}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Link to="/" className={styles.logoLink} onClick={closeModal}>
                        <img
                            src={isMenuOpen ? logo : (isServicePage ? logo3 : logo2)}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </Link>
                </div>

                {/* Menu Button */}
                <button
                    onClick={toggleMenu}
                    className={`${styles.menuButton} ${isServicePage ? styles.menuButtonService : ''}`}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X size={32} strokeWidth={2} />
                    ) : (
                        <Menu size={32} strokeWidth={2} />
                    )}
                </button>
            </header>

            {/* Dropdown Menu Modal */}
            <div
                className={`${styles.menuModal} ${isMenuOpen ? styles.menuModalOpen : styles.menuModalClosed}`}
            >
                <div className={styles.menuContent}>
                    {/* Left side - Menu Items */}
                    <div className={styles.menuLeft}>
                        <div className={styles.menuItems}>
                            <div className={styles.menuItem}>
                                <Link to="/About" className={styles.menuLink} onClick={closeModal}>
                                    <span className={styles.menuNumber}>01</span>
                                    <span className={styles.menuText}>About</span>
                                </Link>
                            </div>
                            <div className={styles.menuItem}>
                                <Link to="/Work" className={styles.menuLink} onClick={closeModal}>
                                    <span className={styles.menuNumber}>02</span>
                                    <span className={styles.menuText}>Works</span>
                                </Link>
                            </div>
                            <div className={styles.menuItem}>
                                <Link to="/Services" className={styles.menuLink} onClick={closeModal}>
                                    <span className={styles.menuNumber}>03</span>
                                    <span className={styles.menuText}>Services</span>
                                </Link>
                            </div>
                            <div className={styles.menuItem}>
                                <a href="#contact-form" onClick={scrollToContact} className={styles.menuLink}>
                                    <span className={styles.menuNumber}>04</span>
                                    <span className={styles.menuText}>Contact</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image and Contact */}
                    <div className={styles.menuRight}>
                        <div className={styles.menuImageContainer}>
                            <img
                                src={img}
                                alt="Interior Design"
                                className={styles.menuImage}
                            />
                        </div>
                        <div className={styles.contactInfo}>
                            <p>hello@bloomingspace.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;