import './OtherSkills.css';

export default function OtherSkills() {
    const skills = [
        {
            id: 1,
            icon: 'bi-file-earmark-word',
            title: 'Microsoft Word',
            description: 'Professional document creation, formatting, and editing with advanced features.',
        },
        {
            id: 2,
            icon: 'bi-file-earmark-spreadsheet',
            title: 'Microsoft Excel',
            description: 'Data analysis, spreadsheet management, formulas, and data visualization.',
        },
        {
            id: 3,
            icon: 'bi-file-earmark-slides',
            title: 'Microsoft PowerPoint',
            description: 'Creating engaging presentations with multimedia elements and animations.',
        },
        {
            id: 4,
            icon: 'bi-palette',
            title: 'CorelDRAW/Canva',
            description: 'Graphics design, and digital art creation.',
        },
        {
            id: 5,
            icon: 'bi-camera-video',
            title: 'Video Editing',
            description: 'Video production and editing using CapCut and similar tools.',
        },
        {
            id: 6,
            icon: 'bi-pencil-square',
            title: 'Content Writing',
            description: 'Creating clear, comprehensive content writing and guides.',
        },
        {
            id: 7,
            icon: 'bi-tools',
            title: 'Computer Maintenance',
            description: 'System optimization, troubleshooting, and software installation.',
        },
        {
            id: 8,
            icon: 'bi-robot',
            title: 'AI tools',
            description: 'Using AI tools for writing, image creation, Avar/movie video creation and Research',
        },
    ];

    return (
        <section id="other-skills" className="other-skills-section py-5">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="mb-3">Other Skills & Expertise</h2>
                    <p className="text-secondary lead">
                        Beyond web development, I have diverse skills and experience
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="row g-4">
                    {skills.map((skill) => (
                        <div className="col-lg-4 col-md-6 col-12" key={skill.id}>

                            <div className="card h-100 shadow-sm border-0 text-center p-4 skill-card">

                                {/* Icon */}
                                <div className="mb-3">
                                    <i className={`bi ${skill.icon} fs-2 text-primary`}></i>
                                </div>

                                {/* Title */}
                                <h5 className="mb-2 fw-bold">
                                    {skill.title}
                                </h5>

                                {/* Description */}
                                <p className="text-secondary">
                                    {skill.description}
                                </p>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}