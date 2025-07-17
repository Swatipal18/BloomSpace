    import React from 'react';
    import { useLocation } from 'react-router-dom';
    import './DetailsWork.css'
    import MoreViews from './MoreViews/MoreViews';

    const DetailsWork = () => {
        const location = useLocation();
        const project = location.state?.project;
        console.log('project: ', project);

        // Fallback data if no project is passed
        const defaultProject = {
            title: "Willow House",
            description: "Soft, serene interiors designed for relaxed family living.",
            year: "2025",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&crop=center",
            client: "The Shah Family",
            type: "Interior Design",
            duration: "06 Months"
        };

        const currentProject = project || defaultProject;

        return (
            <div className="">
                <div className="container">
                    {/* Header */}
                    <div className="header">
                        <h1 className="title">{currentProject.title}</h1>
                        <p className="subtitle">{currentProject.description}</p>
                    </div>
                    {/*  Main Image */}
                    <div className="imageContainer">
                        <img
                            src={currentProject.images[0]}
                            alt={`${currentProject.title} Interior`}
                            className="mainImage"
                        />
                    </div>
                    {/* Details */}
                    <div className="details">
                        <div className="detailItem">
                            <span className="label">CLIENT</span>
                            <span className="value">{currentProject.client}</span>
                        </div>
                        <div className="detailItem">
                            <span className="label">TYPE</span>
                            <span className="value">{currentProject.type}</span>
                        </div>
                        <div className="detailItem">
                            <span className="label">YEAR</span>
                            <span className="value">{currentProject.year}</span>
                        </div>
                        <div className="detailItem">
                            <span className="label">DURATION</span>
                            <span className="value">{currentProject.duration}</span>
                        </div>
                    </div>
                    {/* Intro and Description */}
                    <div >
                        <div className='d-flex justify-content-space-between  mt-5 pt-5 description'>
                            <div className="mission-badge">
                                <span className="badge-text">INTRO</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <h2 className="main-heading">
                                    Understanding the Vision
                                </h2>
                                <span className="highlight-text">
                                    The client approached us with a clear goal: to create a home that felt calm, welcoming, and functional for their everyday lives. They had recently relocated and wanted their new space to reflect their lifestyle and design sensibilities. During our initial consultation, we discussed their needs in detail, from storage requirements to color preferences. It was important that the interiors felt timeless and relaxed, without sacrificing practicality. We developed a concept that emphasized softness, openness, and a strong connection between the rooms.
                                </span>
                            </div>
                        </div>

                        <div className="imageContainer mt-5">
                            <img
                                src={currentProject.images[1]}
                                alt={`${currentProject.title} Detail View`}
                                className="mainImage"
                            />
                        </div>
                    </div>
                </div>

                {/* CHALLENGES  & DESCRIPTION */}
                <div className="containers">
                    {/* CHALLENGES  & DESCRIPTION */}
                    <div className='d-flex justify-content-space-between  mt-5 description'>
                        <div className="mission-badge">
                            <span className="badge-text">CHALLENGES</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <h2 className="main-heading">
                                Material & Palette Selection
                            </h2>
                            <span className="highlight-text">
                                To achieve the calming atmosphere, we chose a muted palette featuring soft whites, warm greys, and natural wood accents. Textiles were carefully selected to bring in warmth—think linen drapes, wool rugs, and cotton upholstery. We also incorporated subtle patterns and layered textures to create depth without overwhelming the senses. The flooring was refinished to a matte oak tone, which added warmth and cohesion throughout. Every element was chosen not only for its aesthetic value but also for its durability and ease of maintenance, essential for a busy family home.
                            </span>
                        </div>
                    </div>

                    <div className="imageContainer mt-5">
                        <img
                            src={currentProject.images[2]}
                            alt={`${currentProject.title} Detail View`}
                            className="mainImage"
                        />
                    </div>

                </div>

                {/* OUTCOME  & DESCRIPTION */}
                <div className="containera">
                    <div className='d-flex justify-content-space-between description'>
                        <div className="mission-badge">
                            <span className="badge-text">OUTCOME</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <h2 className="main-heading">
                                Bringing the Space to Life
                            </h2>
                            <span className="highlight-text">
                                We reconfigured the layout slightly to improve flow between the living, dining, and kitchen areas, making the home feel more open and connected. Custom built-ins were added for storage, helping maintain a clutter-free environment. Lighting played a key role—we used layered lighting to enhance the mood and function of each space. Artwork and accessories were kept minimal and meaningful, adding a personal touch to the serene environment. The final result is a space that supports the family’s lifestyle while offering moments of quiet beauty throughout.
                            </span>
                        </div>
                    </div>

                    <div className="imageContainer mt-5">
                        <img
                            src={currentProject.images[3]}
                            alt={`${currentProject.title} Detail View`}
                            className="mainImage"
                        />
                    </div>

                </div>
                {/* More to View */}
                <MoreViews />
            </div>
        );
    };

    export default DetailsWork;