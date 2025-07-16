import React from 'react';
import { Menu, ArrowDown } from 'lucide-react';
import bgimg from "../../../assets/3d-electric-car-building-min.jpg";
import styles from './HomePage.module.css';
import InteriorMarquee from './Section/InteriorMarquee/InteriorMarquee';
import WillowHouse from './Section/WillowHouse/WillowHouse';
import TestimonialSlider from './Section/TestimonialSlider/TestimonialSlider';
import ServicesSection from './Section/ServicesSection/ServicesSection';
import FAQ from './Section/FAQ/FAQ';

export default function HomePage() {
    return (
        <>
            {/* bg image */}
            <div className={styles.container}
                style={{
                    backgroundImage: `url(${bgimg})`,
                }}>

                {/* Main Content */}
                <div className={styles.mainContent}>

                    {/* Hero Text */}
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            We craft beautiful, functional living spaces — from architecture to interiors — tailored to your lifestyle and vision.
                        </h1>
                    </div>

                    {/* View Works Button */}
                    <div className={styles.buttonContainer}>
                        <button className={styles.viewWorksButton}>
                            <span className={styles.buttonText}>View Works</span>
                            <ArrowDown className={styles.arrowIcon} />
                        </button>
                    </div>

                    {/* Large Title */}
                    <div className={styles.largeTitleContainer}>
                        <h2 className={styles.largeTitle}>
                            Blooming Space
                        </h2>
                    </div>
                </div>
            </div>
            {/* rotating image */}
            <InteriorMarquee />
            {/*  Works Section */}
            <WillowHouse />
            {/* ServicesSection  */}
            <ServicesSection />
            {/* FAQ Section */}
            <FAQ />
            {/* slider & image */}
            <TestimonialSlider />
        </>
    );
}