import { useState, useEffect, useRef } from 'react';
import { JavaScript, CSS3, React, GitHubDark, Bootstrap5, HTML5, Git, VisualStudioCode, Chrome, Bash, DeveloperIcons } from 'developer-icons';
import { FaCode } from "react-icons/fa";
import * as Icons from "developer-icons"

console.log(Icons);

import './Skills.css';

export default function Skills() {
    const skills = [
        { name: 'HTML5', percentage: 95, icon: HTML5 },
        { name: 'CSS', percentage: 90, icon: CSS3 },
        { name: 'JavaScript', percentage: 85, icon: JavaScript },
        { name: 'React.js', percentage: 70, icon: React },
        { name: 'Bootstrap', percentage: 92, icon: Bootstrap5 },
        { name: 'Git & GitHub', percentage: 85, icon: GitHubDark }
    ];
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
        <section id="skills" className="skills-section py-5">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="mb-3">Technical Skills</h2>
                    <p className="text-secondary lead">
                        Here are the core technologies and tools I work with
                    </p>
                </div>

                {/* Skills */}
                <div className={`row g-4 skills ${show ? 'show' : ''}`} ref={ref}>
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (

                            <div className="col-lg-2 col-md-2 col-4" key={index}>
                                <div className="skill-card p-3 shadow-sm rounded-4 w-90 ">

                                    <div className={`d-flex align-items-center mb-3`} title={skill.name}>
                                        {/*<h5 className="mb-0 fw-bold text-dark">{skill.name}</h5>*/}
                                        <Icon className="fs-1 text-primary mb-0 " title={skill.name} />

                                        {/*<span className="badge bg-warning text-dark">
                                        {skill.percentage}%
                                    </span>
                                </div>

                                /* Progress Bar */
                                /*<div className="progress" style={{ height: '8px' }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: `${skill.percentage}%` }}
                                    ></div>
                                     */}
                                    </div>


                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Tools */}
                <div className="text-center mt-5">
                    <h4 className="mb-4">Tools & Platforms</h4>
                </div>

                <div className="row g-4">

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            {/*<i className="bi bi-browser-chrome fs-2 mb-2"></i>*/}
                            <Chrome className="fs-2 mb-2" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            {/*<i className="bi bi-file-earmark-code fs-2 mb-2"></i>*/}
                            <VisualStudioCode className="fs-2 mb-2" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            {/*<i className="bi bi-code fs-2 mb-2"></i>*/}
                            <DeveloperIcons className="fs-2 mb-2" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            {/*  <i className="bi bi-git fs-2 mb-2"></i>*/}
                            <Git className="fs-2 mb-2" />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}