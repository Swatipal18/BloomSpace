import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MoreViews.module.css';
import Image from '../../../../assets/work_images/covered-lifestyle-garden-with-indoor-outdoor-living-min.jpg';
import Image1 from '../../../../assets/work_images/digital-lavender-interior-design-min.jpg';
import Image2 from '../../../../assets/work_images/photorealistic-timber-house-interior-with-wooden-decor-furnishings-min.jpg';
import Image3 from '../../../../assets/work_images/photorealistic-stone-wall-surface-used-interior-design_23-2151214796-min.jpg';
import Image4 from '../../../../assets/work_images/view-futuristic-lighting-lamp-design_23-2151037471-min.jpg';
import Image5 from '../../../../assets/work_images/view-luxurious-hotel-interior-space_23-2150683449-min.jpg';
import Image6 from '../../../../assets/work_images/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23717-min.jpg';
const MoreViews = ({ currentProject }) => {
    const navigate = useNavigate();
    // console.log('Current project in MoreViews: ', currentProject);
    const id = currentProject.id;
    // console.log('id: ', id);

    const projects = [
        {
            id: 1,
            title: "Willow House",
            description: "Soft, serene interiors designed for relaxed family living.",
            year: "2025",
            images: [Image2, Image4, Image5, Image6],
            client: "The Shah Family",
            type: "Interior Design",
            duration: "06 Months"
        },
        {
            id: 2,
            title: "Terra Garden",
            description: "A native garden built for beauty and year-round use.",
            year: "2025",
            images: [Image, Image1, Image2, Image3],
            client: "The Patel Family",
            type: "Landscape Design",
            duration: "04 Months"
        },
        {
            id: 3,
            title: "Loft & Line",
            description: "Minimalist loft tailored for modern, flexible city life.",
            year: "2025",
            images: [Image1, Image3, Image, Image2],
            client: "The Kumar Family",
            type: "Interior Design",
            duration: "05 Months"
        },
        {
            id: 4,
            title: "Stonebay Bath",
            description: "Calm, spa-like bathroom with natural stone finishes.",
            year: "2025",
            images: [Image3, Image2, Image1, Image],
            client: "The Sharma Family",
            type: "Bathroom Design",
            duration: "03 Months"
        }
    ];

    // Current project ko exclude karo aur sirf 2 projects show karo
    const filteredProjects = projects.filter(project => project.id !== id).slice(0, 2);

    const handleProjectClick = (project) => {
        navigate(`/Work/${project.id}`, { state: { project } });
    };

    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <div className={styles.missionbadge}>
                    <span className={styles.badgetext}>INTRO</span>
                </div>
                <div>
                    <h2 className={styles.mainheading}>
                        More to View
                    </h2>
                </div>
            </div>
            <div className={styles.gallery}>
                {filteredProjects.map((project, index) => (
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
                                src={project.images[0]}
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