import { useState, useEffect, useRef } from 'react';
import './About.css';
import about from '../assets-webp/profile3.webp'
import cv from '../assets/Abur_Daniel_CV_Final.pdf';
const About = () => {

    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);

                    // ✅ stop observing after this card shows
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0 } // ✅ less sensitive trigger
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <section id="about" className="about-section py-5">
            <div className="container">

                <h2 className="text-center mb-5 fw-bold">About Me</h2>

                <div className="row align-items-center gy-5">

                    {/* Image */}
                    <div className={`col-lg-4 text-center projects ${show ? 'show' : ''} `} ref={ref}>
                        <img
                            loading='lazy'
                            src={about}
                            alt="About"
                            className="img-fluid rounded shadow about-image"
                        />
                    </div>

                    {/* Content */}
                    <div className="col-lg-8">
                        <div className={`about-content projects ${show ? 'show' : ''} `} ref={ref} >

                            <p className=" mb-3">
                              I’m a dedicated front-end developer passionate about building intuitive, responsive web experiences, with a background in medical imaging and research writing that complements my tech journey.

                            </p>

                            <p className="mb-4">
                                I specialize in React.js, Bootstrap, and modern web technologies to build scalable, real-world applications, and I’m also passionate about content writing, medical imaging analysis, and graphic design.

                            </p>

                            {/* Education */}
                            <h4 className="fw-bold mt-4 mb-3">Education</h4>

                            <div className="mb-3 pb-3 border-bottom">
                                <p className="mb-1">
                                    <strong>Bachelor's Degree in Physics</strong>
                                </p>
                                 <p className="mb-0">
                                    [Bachelor’s degree in Physics with a strong foundation in analytical thinking, problem-solving, and applied science, with exposure to medical imaging and research.
]
                                </p>

                                 <div className="mb-3 pb-3 border-bottom">
                                <p className="mb-1">
                                    <strong>Software Engnineering</strong>
                                </p>
                                 <p className="mb-0">
                                    [Software Engineering with a focus on front-end development, building responsive and user-friendly interfaces using modern web technologies such as React.js, HTML, CSS, JavaScript, and Bootstrap.
]
                                </p>
                                </div>
                            
                            </div>

                            {/* Career Interests */}


                            {/* Button */}
                            <a
                                href={cv}
                                download
                                className="btn btn-warning rounded-pill mt-4 px-5 py-2"
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