import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';
import image from '../../../../../assets/home_images/medium-shot-colleagues-back-office-min.jpg';
import bg from '../../../../../assets/bg-image.png';
import profile from '../../../../../assets/home_images/WhatsApp Image 2025-07-12 at 00.05.35@2x.png'

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            quote: "From concept to final details, the team was thoughtful, professional, and incredibly in tune with our vision.",
            name: "Anup Parekh",
            title: "CEO, Nexora Tech",
            avatar: profile
        },
        {
            id: 2,
            quote: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
            name: "Sarah Johnson",
            title: "CTO, InnovateCorp",
            avatar: profile
        },
        {
            id: 3,
            quote: "The level of expertise and professionalism demonstrated throughout our project exceeded all expectations.",
            name: "Michael Chen",
            title: "Product Manager, TechFlow",
            avatar: profile
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            },2000);

            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, testimonials.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    return (
        <div className='testimonial-section' style={{ backgroundImage: `url(${bg})` }}>
            <div className="testimonial-container">
                <div
                    className="testimonial-content"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Left Side - Slider */}
                    <div className="testimonial-left">
                        <div className="quote-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="92.063" height="70.613" viewBox="0 0 92.063 70.613">
                                <path id="Path_7" data-name="Path 7" d="M87.056,11.587c5.319,5.647,8.175,11.984,8.175,22.257,0,18.067-12.683,34.265-31.136,42.27L59.486,69c17.22-9.317,20.585-21.4,21.931-29.022a18.511,18.511,0,0,1-9.96,1.608A18.071,18.071,0,0,1,72.869,5.5,19.99,19.99,0,0,1,87.056,11.587Zm-51.63,0C40.745,17.233,43.6,23.571,43.6,33.843c0,18.067-12.683,34.265-31.136,42.27L7.856,69c17.22-9.317,20.585-21.4,21.931-29.022a18.51,18.51,0,0,1-9.96,1.608A18.071,18.071,0,0,1,21.24,5.5,19.989,19.989,0,0,1,35.426,11.587Z" transform="translate(-3.169 -5.5)" fill="rgba(0,0,0,0.4)" />
                            </svg>
                        </div>

                        <div className="testimonial-text">
                            <p className="quote-text">
                                {testimonials[currentSlide].quote}
                            </p>
                        </div>

                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img src={testimonials[currentSlide].avatar} alt={testimonials[currentSlide].name} />
                            </div>
                            <div className="author-info">
                                <h4 className="author-name">{testimonials[currentSlide].name}</h4>
                                <p className="author-title">{testimonials[currentSlide].title}</p>
                            </div>
                        </div>

                        <div className="slider-controls">
                            <div className="dots-container">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="testimonial-right">
                        <div className="business-image">
                            <img
                                src={image}
                                alt="Business meeting"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;