import React from 'react';
import './About.css';
import about from '../assets/profile3.jpeg'
const About = () => {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">

                <h2 className="text-center mb-5 fw-bold">About Me</h2>

                <div className="row align-items-center gy-5">

                    {/* Image */}
                    <div className="col-lg-4 text-center ">
                        <img
                            loading='lazy'
                            src={about}
                            alt="About"
                            className="img-fluid rounded shadow about-image"
                        />
                    </div>

                    {/* Content */}
                    <div className="col-lg-8">
                        <div className="about-content">

                            <h3 className="fs-4 fw-bold mb-3">
                                Physicist | Front-End Developer | Writer | Medical Imaging Enthusiast | Aspiring Medical Physicist
                            </h3>

                            <p className="lead mb-3">
                                I'm a dedicated front-end developer with a passion for creating intuitive
                                and responsive web experiences. My journey in technology is complemented by
                                a unique background in medical imaging and research writing.
                            </p>

                            <p className="mb-4">
                                With expertise in React.js, Bootstrap, and modern web technologies, I build
                                scalable applications that solve real-world problems. Beyond coding, I'm
                                passionate about content writing, medical imaging analysis, and graphic design.
                            </p>

                            {/* Education */}
                            <h4 className="fw-bold mt-4 mb-3">Education</h4>

                            <div className="mb-3 pb-3 border-bottom">
                                <p className="mb-1">
                                    <strong>Bachelor's Degree in Physics</strong>
                                </p>
                                <p className="text-muted mb-0">
                                    Expected Graduation: [2023]
                                </p>
                            </div>

                            {/* Career Interests */}
                            <h4 className="fw-bold mt-4 mb-3">Career Interests</h4>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle text-primary me-2"></i>
                                    Front-End Development
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle text-primary me-2"></i>
                                    Content Writing
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle text-primary me-2"></i>
                                    Medical Imaging & Healthcare Technology
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle text-primary me-2"></i>
                                    Full-Stack Web Development
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle text-primary me-2"></i>
                                    AI/Machine Learning
                                </li>
                            </ul>

                            {/* Button */}
                            <a
                                href="https://via.placeholder.com"
                                download
                                className="btn btn-primary rounded-pill mt-4 px-5 py-2"
                            >
                                <i className="bi bi-download me-2"></i>
                                Download CV
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;