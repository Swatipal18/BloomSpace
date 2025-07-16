import React from 'react';
import styles from './Footer.module.css';
import ContactForm from '../../pages/ContactForm/ContactForm';
import footerImage from '../../../assets/room-house-decorated-with-brazilian-folklore-design-min.jpg'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <ContactForm />
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
                                    <li><a href="#home" className={styles.navLink}>Home</a></li>
                                    <li><a href="#about" className={styles.navLink}>About</a></li>
                                    <li><a href="#work" className={styles.navLink}>Work</a></li>
                                    <li><a href="#services" className={styles.navLink}>Services</a></li>
                                    <li><a href="#contact" className={styles.navLink}>Contact</a></li>
                                </ul>
                            </nav>
                            {/* Social Media Icons */}
                            <div className={styles.socialMedia}>
                                <a href="#" className={styles.socialLink}>
                                    <div className={styles.socialIcon}>
                                        <PiInstagramLogoFill />
                                    </div>
                                </a>
                                <a href="#" className={styles.socialLink}>
                                    <div className={styles.socialIcon}>
                                        <FaXTwitter />
                                    </div>
                                </a>
                                <a href="#" className={styles.socialLink}>
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
                                <span className={styles.contactValue}>+91 9558657890</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Location</span>
                                <span className={styles.contactValue}>Ahmedabad, Gujarat</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Mail</span>
                                <span className={styles.contactValue}>mail@businessspace.in</span>
                            </div>
                        </div>
                        {/* Copyright Section */}
                        <div className={styles.copyright}>
                            <div className={styles.copyrightLeft}>
                                <span>Copyright © 2025 </span>
                                <a href="#" className={styles.brandLink}>Blooming Space</a>
                            </div>
                            <div className={styles.copyrightRight}>
                                <span>Design & Developed By </span>
                                <a href="#" className={styles.brandLink}>Nexara Tech</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;