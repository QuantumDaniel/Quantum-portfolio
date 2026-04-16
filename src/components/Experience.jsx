import './Experience.css';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            icon: 'bi-radioactive',
            title: 'Radiology / Medical Imaging',
            description:
                'Practical experience in medical imaging technologies including X-ray systems, ultrasound equipment, and imaging protocols.',
            details: ['Image Acquisition', 'Equipment Operation', 'Patient Safety', 'Protocol Knowledge'],
        },

        {
            id: 2,
            icon: ' bi-activity',
            title: 'X-ray imaging tools',
            description:
                'Proficiency in using/troubleshooting computed radiography(CR) sytem. ',
            details: ['Computed Radiography', 'Image Interpretation', 'Equipment Care', 'Protocols'],
        },
        {
            id: 3,
            icon: 'bi-book',
            title: 'Research Writing',
            description:
                'Strong background in academic and technical research writing and scientific documentation.',
            details: ['Paper Writing', 'Literature Review', 'Documentation', 'Data Analysis'],
        },
        {
            id: 4,
            icon: 'bi-heart-pulse',
            title: 'Medical Physics Interest',
            description:
                'Keen interest in medical physics, radiation safety, and diagnostic imaging principles.',
            details: ['Radiation Physics', 'Safety Standards', 'Image Physics', 'Dosimetry'],
        },
    ];

    return (
        <section id="experience" className="experience-section py-5">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="mb-3">Professional Experience</h2>
                    <p className="text-secondary lead">
                        My journey in medical imaging and related fields
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="row g-4">
                    {experiences.map((exp) => (
                        <div className="col-lg-6 col-12" key={exp.id}>
                            <div className="card h-100 shadow-sm border-0 experience-card">

                                <div className="card-body p-4">

                                    {/* Icon */}
                                    <div className="mb-3">
                                        <i className={`bi ${exp.icon} fs-2 text-primary`}></i>
                                    </div>

                                    {/* Title */}
                                    <h5 className="mb-3 fw-bold">
                                        {exp.title}
                                    </h5>

                                    {/* Description */}
                                    <p className="text-secondary mb-3">
                                        {exp.description}
                                    </p>

                                    {/* Details */}
                                    <div>
                                        {exp.details.map((detail, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-light text-dark me-2 mb-2"
                                            >
                                                {detail}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}