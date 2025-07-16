import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import './ServicesSection.css';
import bgblack from '../../../../../assets/bg-black.png';
import img from '../../../../../assets/home_images/neoclassical-style-interior-design-with-decor-furnishings-min.jpg';

const ServicesSection = () => {
    const [activeService, setActiveService] = useState('Interior Design');

    const services = [
        {
            name: 'Interior Design',
            image: img ,
            description: 'Tailored layouts, materials, and styling to transform any room into a functional, beautiful space.'
        },
        {
            name: 'Landscape Design',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
            description: 'Beautiful outdoor spaces designed to enhance your property and lifestyle.'
        },
        {
            name: 'Home Remodeling',
            image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop',
            description: 'Complete home transformations with expert craftsmanship and attention to detail.'
        },
        {
            name: 'Cafe Remodeling',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop',
            description: 'Commercial spaces designed to create the perfect atmosphere for your business.'
        },
        {
            name: 'Custom Furniture',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
            description: 'Bespoke furniture pieces crafted to perfectly fit your space and style.'
        }
    ];

    const currentService = services.find(service => service.name === activeService);

    return (
        <div className="services-container" style={{
            backgroundImage: `url(${bgblack})`
        }}>
            <div className="services-content">
                <div className="services-left">
                    <div className="services-header">
                        <div className="red-box"></div>
                        <span className="services-title">SERVICES</span>
                    </div>

                    <div className="services-list">
                        {services.map((service, index) => (
                            <div
                                key={service.name}
                                className={`service-item ${activeService === service.name ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService(service.name)}
                            >
                                <div className="service-content">
                                    < FaArrowRight
                                        className={`service-arrow ${activeService === service.name ? 'active' : ''}`}
                                        size={24}
                                    />
                                    <span className="service-name">{service.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="services-right">
                    <div className="image-container">
                        <img
                            src={currentService.image}
                            alt={currentService.name}
                            className="service-image"
                        />
                    </div>
                    <p className="service-description">
                        {currentService.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;