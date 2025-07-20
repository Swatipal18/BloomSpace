import React from 'react';
import styles from './Footer.module.css';
import ContactForm from '../../pages/ContactForm/ContactForm';
import footerImage from '../../../assets/room-house-decorated-with-brazilian-folklore-design-min.jpg'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactElement = document.getElementById('contact-form');
        if (contactElement) {
            contactElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Social media click handlers
    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/', '_blank');
    };

    const handleTwitterClick = () => {
        window.open('https://twitter.com/', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/', '_blank');
    };

    // Contact action handlers
    const handleCallClick = () => {
        window.open('tel:+919558657890', '_self');
    };

    const handleLocationClick = () => {
        window.open('https://maps.google.com/?q=Ahmedabad,Gujarat', '_blank');
    };

    const handleMailClick = () => {
        window.open('mailto:mail@businessspace.in', '_self');
    };

    return (
        <>
            <div id="contact-form">
                <ContactForm />
            </div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    {/* Logo and Brand Section */}
                    <div className={styles.brandSection}>
                        <div className={styles.logoContainer}>
                            <img
                                src={footerImage}
                                alt="Let's Chat Logo"
                                className={styles.logo}
                            />
                            <h2 className={styles.brandName}>Let's Chat</h2>
                        </div>
                    </div>
                    <div className={styles.divider}>
                        {/* Navigation Links */}
                        <div className={styles.navigationSection}>
                            <nav className={styles.navigation}>
                                <ul className={styles.navList}>
                                    <li><Link to="/" className={styles.navLink}>Home</Link></li>
                                    <li><Link to="/About" className={styles.navLink}>About</Link></li>
                                    <li><Link to="/Work" className={styles.navLink}>Work</Link></li>
                                    <li><Link to="#services" className={styles.navLink}>Services</Link></li>
                                    <li><a href="#contact-form" onClick={scrollToContact} className={styles.navLink}>Contact</a></li>
                                </ul>
                            </nav>
                            {/* Social Media Icons */}
                            <div className={styles.socialMedia}>
                                <a
                                    href="#"
                                    className={styles.socialLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleInstagramClick();
                                    }}
                                >
                                    <div className={styles.socialIcon}>
                                        <PiInstagramLogoFill />
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className={styles.socialLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTwitterClick();
                                    }}
                                >
                                    <div className={styles.socialIcon}>
                                        <FaXTwitter />
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className={styles.socialLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkedInClick();
                                    }}
                                >
                                    <div className={styles.socialIcon}>
                                        <FaLinkedin />
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Contact Information */}
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Call</span>
                                <span
                                    className={`${styles.contactValue} ${styles.clickable}`}
                                    onClick={handleCallClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    +91 9558657890
                                </span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Location</span>
                                <span
                                    className={`${styles.contactValue} ${styles.clickable}`}
                                    onClick={handleLocationClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Ahmedabad, Gujarat
                                </span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Mail</span>
                                <span
                                    className={`${styles.contactValue} ${styles.clickable}`}
                                    onClick={handleMailClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    mail@businessspace.in
                                </span>
                            </div>
                        </div>
                        {/* Copyright Section */}
                        <div className={styles.copyright}>
                            <div className={styles.copyrightLeft}>
                                <span>Copyright © 2025 </span>
                                <a href="" className={styles.brandLink}>Blooming Space</a>
                            </div>
                            <div className={styles.copyrightRight}>
                                <span>Design & Developed By </span>
                                <a href="" className={styles.brandLink}>Nexara Tech</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;