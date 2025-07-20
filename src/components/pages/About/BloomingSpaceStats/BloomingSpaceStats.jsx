import React, { useState, useEffect, useRef } from 'react';
import './BloomingSpace.css';

const BloomingSpaceStats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
    const [counters, setCounters] = useState({
        satisfaction: 0,
        projects: 0,
        repeat: 0
    });
    const sectionRef = useRef(null);

    // Intersection Observer for visibility detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    // Counter animation effect
    useEffect(() => {
        if (isVisible && !hasAnimated) {
            const duration = 2000; // 2 seconds
            const frameRate = 60;
            const totalFrames = duration / (1000 / frameRate);

            const targets = {
                satisfaction: 98,
                projects: 150,
                repeat: 64
            };

            let frame = 0;
            const timer = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                setCounters({
                    satisfaction: Math.min(Math.floor(targets.satisfaction * easeOutQuart), targets.satisfaction),
                    projects: Math.min(Math.floor(targets.projects * easeOutQuart), targets.projects),
                    repeat: Math.min(Math.floor(targets.repeat * easeOutQuart), targets.repeat)
                });

                if (frame >= totalFrames) {
                    clearInterval(timer);
                    setCounters(targets);
                    setHasAnimated(true); 
                }
            }, 1000 / frameRate);

            return () => clearInterval(timer);
        }
    }, [isVisible, hasAnimated]);

    return (
        <div ref={sectionRef} className="stats-section">
            <div className="container">
                <div className='d-flex justify-content-space-between gap-5 intro'>
                    <div className="mission-badge">
                        <span className="badge-text">OUR MISSION</span>
                    </div>
                    <h2 className="main-heading">
                        At Blooming Space, we transform spaces with thoughtful design and care —
                        <span className="highlight-text"> creating spaces that inspire, nurture, and reflect your unique way of living.</span>
                    </h2>
                </div>
                <div className="content">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">
                                {counters.satisfaction}%
                            </div>
                            <div className="stat-label">Customer Satisfaction Rate</div>
                            <div className="stat-description">
                                Our clients consistently rate their experience as excellent.
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-number">
                                {counters.projects}+
                            </div>
                            <div className="stat-label">Projects Completed</div>
                            <div className="stat-description">
                                Our clients consistently rate their experience as excellent.
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-number">
                                {counters.repeat}%
                            </div>
                            <div className="stat-label">Repeat Client Rate</div>
                            <div className="stat-description">
                                Our clients consistently rate their experience as excellent.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloomingSpaceStats;