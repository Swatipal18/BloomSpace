import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import styles from './Header.module.css';
import logo from "../../../assets/Logo/logo_blooming space_1.png";
import logo2 from "../../../assets/Logo/logo_blooming space_White.png";
import img from "../../../assets/modern-styled-entryway-min.jpg";
import { Link, Links } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <header className={styles.header}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Link to="/" className={styles.logoLink}>
                        <img
                            src={isMenuOpen ? logo2 : logo}
                            alt="Logo"
                            className={styles.logo}
                        />
                    </Link>
                </div>

                {/* Menu Button */}
                <button
                    onClick={toggleMenu}
                    className={styles.menuButton}
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
                                <Link to="/About" className={styles.menuLink}>
                                    <span className={styles.menuNumber}>01</span>
                                    <span className={styles.menuText}>About</span>
                                </Link>
                            </div>
                            <div className={styles.menuItem}>
                                <Link to="/Work" className={styles.menuLink}>
                                    <span className={styles.menuNumber}>02</span>
                                    <span className={styles.menuText}>Works</span>
                                </Link>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.menuNumber}>03</span>
                                <span className={styles.menuText}>Services</span>
                            </div>
                            <div className={styles.menuItem}>
                                <span className={styles.menuNumber}>04</span>
                                <span className={styles.menuText}>Contact</span>
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