import './Skills.css';

export default function Skills() {
    const skills = [
        { name: 'HTML', percentage: 95 },
        { name: 'CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React.js', percentage: 70 },
        { name: 'Bootstrap', percentage: 92 },
        { name: 'Git & GitHub', percentage: 85 },
        { name: 'Responsive Design', percentage: 90 },
    ];

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
                <div className="row g-4">
                    {skills.map((skill, index) => (
                        <div className="col-lg-6 col-md-12" key={index}>
                            <div className="skill-card p-3 shadow-sm rounded">

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="mb-0 fw-bold text-dark">{skill.name}</h5>
                                    <span className="badge bg-warning text-dark">
                                        {skill.percentage}%
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="progress" style={{ height: '8px' }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: `${skill.percentage}%` }}
                                    ></div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Tools */}
                <div className="text-center mt-5">
                    <h4 className="mb-4">Tools & Platforms</h4>
                </div>

                <div className="row g-4">

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            <i className="bi bi-browser-chrome fs-2 mb-2"></i>
                            <h6>Chrome DevTools</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            <i className="bi bi-file-earmark-code fs-2 mb-2"></i>
                            <h6>VS Code</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            <i className="bi bi-terminal fs-2 mb-2"></i>
                            <h6>Terminal</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="tool-badge text-center p-3 shadow-sm rounded">
                            <i className="bi bi-git fs-2 mb-2"></i>
                            <h6>Git</h6>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}