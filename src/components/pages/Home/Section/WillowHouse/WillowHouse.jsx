import React from 'react';
import styles from './WillowHouse.module.css';
import Image from '../../../../../assets/home_images/3d-rendering-vintage-colorful-living-room-with-retro-style-min.jpg';

const WillowHouse = () => {
    const projects = [
        {
            id: 1,
            title: "Willow House",
            description: "Soft, serene interiors designed for relaxed family living.",
            year: "2025",
            image: Image
        },
        {
            id: 2,
            title: "Willow House",
            description: "Soft, serene interiors designed for relaxed family living.",
            year: "2025",
            image: Image
        },
        {
            id: 3,
            title: "Willow House",
            description: "Soft, serene interiors designed for relaxed family living.",
            year: "2025",
            image: Image
        },
        {
            id: 4,
            title: "Willow House",
            description: "Soft, serene interiors designed for relaxed family living.",
            year: "2025",
            image: Image
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.backgroundText}>Work</div>

            <div className={styles.gallery}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${styles.projectCard} ${index % 2 === 0 ? styles.left : styles.right}`}
                    >

                        <div className={styles.imageContainer}>
                            <div className={styles.overlay}></div>
                            <div className={styles.overlaytwo}></div>

                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                            />

                        </div>
                        <div className={styles.projectInfo}>
                            <h2 className={styles.projectTitle}>{project.title}</h2>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <span className={styles.projectYear}>{project.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WillowHouse;