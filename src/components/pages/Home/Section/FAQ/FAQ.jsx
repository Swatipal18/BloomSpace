import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';
import bg from '../../../../../assets/bg-image.png';

const FAQ = () => {
    const [openItem, setOpenItem] = useState(0); // First item open by default

    const faqData = [
        {
            question: "Do you work with specific contractors or builders?",
            answer: "Yes, we have a trusted network of professionals, but we're also happy to collaborate with your preferred team."
        },
        {
            question: "Is there a minimum project size or budget?",
            answer: "We work on projects of all sizes, though we typically recommend a minimum budget to ensure quality results."
        },
        {
            question: "How do I get started with a project?",
            answer: "Simply reach out through our contact form—we'll schedule a consultation to discuss your needs and next steps."
        },
        {
            question: "Do you offer both interior and exterior design services?",
            answer: "Yes, we provide a full range of services—from interior styling to garden and landscape design."
        },
        {
            question: "How involved will I be in the design process?",
            answer: "We collaborate closely with you at every step to ensure the final result reflects your vision and needs."
        },
        {
            question: "What's the typical project timeline?",
            answer: "Timelines vary based on project size, but most projects take between 4-12 weeks from start to finish."
        }
    ];

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? -1 : index);
    };

    return (
        <div
            className="containera"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="faq-container">
                <div className="faq-content">
                    <div className="faq-left">
                        <div className="faq-badge">
                            <span className="faq-icon"></span>
                            FAQ
                        </div>
                        <h1 className="faq-title">
                            Your Questions,<br />
                            Answered
                        </h1>
                        <p className="faq-description">
                            Find quick answers to the most common questions about our services and process.
                        </p>
                    </div>

                    <div className="faq-right">
                        {faqData.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div
                                    className="faq-question"
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="toggle-icon">
                                        {openItem === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                    <span className="question-text">{item.question}</span>

                                </div>
                                {openItem === index && (
                                    <div className="faq-answer">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FAQ;