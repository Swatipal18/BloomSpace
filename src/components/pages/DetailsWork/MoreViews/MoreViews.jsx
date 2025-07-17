import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MoreViews.module.css';
import Image from '../../../../assets/work_images/covered-lifestyle-garden-with-indoor-outdoor-living-min.jpg';
import Image1 from '../../../../assets/work_images/digital-lavender-interior-design-min.jpg';
import Image2 from '../../../../assets/work_images/photorealistic-timber-house-interior-with-wooden-decor-furnishings-min.jpg';
import Image3 from '../../../../assets/work_images/photorealistic-stone-wall-surface-used-interior-design_23-2151214796-min.jpg';

const MoreViews = () => {
    const navigate = useNavigate();

    const projects = [
        // {
        //     id: 1,
        //     title: "Willow House",
        //     description: "Soft, serene interiors designed for relaxed family living.",
        //     year: "2025",
        //     image: Image2,
        //     client: "The Shah Family",
        //     type: "Interior Design",
        //     duration: "06 Months"
        // },
        // {
        //     id: 2,
        //     title: "Terra Garden",
        //     description: "A native garden built for beauty and year-round use.",
        //     year: "2025",
        //     image: Image,
        //     client: "The Patel Family",
        //     type: "Landscape Design",
        //     duration: "04 Months"
        // },
        {
            id: 3,
            title: "Loft & Line",
            description: "Minimalist loft tailored for modern, flexible city life.",
            year: "2025",
            image: Image1,
            client: "The Kumar Family",
            type: "Interior Design",
            duration: "05 Months"
        },
        {
            id: 4,
            title: "Stonebay Bath",
            description: "Calm, spa-like bathroom with natural stone finishes.",
            year: "2025",
            image: Image3,
            client: "The Sharma Family",
            type: "Bathroom Design",
            duration: "03 Months"
        }
    ];

    const handleProjectClick = (project) => {
        navigate(`/Work/${project.id}`, { state: { project } });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.missionbadge}>
                    <span className="badge-text">RELATED WORKS</span>
                </div>
                <div className='d-flex '>
                    <h2 className="main-heading">
                        More to View
                    </h2>
                </div>
            </div>
            <div className={styles.gallery}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${styles.projectCard}`}
                        onClick={() => handleProjectClick(project)}
                        style={{ cursor: 'pointer' }}
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

export default MoreViews;