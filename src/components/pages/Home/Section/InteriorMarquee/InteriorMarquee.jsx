import React from 'react';
import styles from './InteriorMarquee.module.css';
import Image from '../.././../../../assets/home_images/colorful-pastel-minimal-interior-design (1)-min.jpg';
import Image2 from '../.././../../../assets/home_images/colorful-pastel-minimal-interior-design-min.jpg';
import Image3 from '../.././../../../assets//home_images/elegant-black-minimal-interior-design-min.jpg';
import Image4 from '../.././../../../assets/home_images/modern-styled-entryway-min.jpg';

const InteriorMarquee = () => {
    // Sample interior design images - replace with your actual images
    const images = [
        Image, Image2, Image3, Image4,
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    ];

    return (
        <div className={styles.container}>
            <div className={styles.marqueeWrapper}>
                <div className={styles.marqueeContent}>
                    {/* First set of images */}
                    {images.map((image, index) => (
                        <div
                            key={`first-${index}`}
                            className={`${styles.imageContainer} ${(index + 1) % 3 === 0 ? styles.offsetImage : ''}`}
                        >
                            <img
                                src={image}
                                alt={`Interior ${index + 1}`}
                                className={styles.image}
                            />
                        </div>
                    ))}

                    {/* Duplicate set for infinite effect */}
                    {images.map((image, index) => (
                        <div
                            key={`second-${index}`}
                            className={`${styles.imageContainer} ${(index + 1) % 3 === 0 ? styles.offsetImage : ''}`}
                        >
                            <img
                                src={image}
                                alt={`Interior ${index + 1}`}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteriorMarquee;