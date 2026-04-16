import './ProjectCard.css';

export default function ProjectCard({
    image,
    title,
    description,
    technologies,
    githubLink,
    liveLink,
}) {
    return (
        <div className="card project-card h-100 shadow-sm">

            {/* Image */}
            <img
                loading='lazy'
                src={image}
                className="card-img-top project-image"
                alt={title}
            />

            {/* Body */}
            <div className="card-body d-flex flex-column">

                <h5 className="card-title project-title mb-3">
                    {title}
                </h5>

                <p className="card-text text-secondary flex-grow-1 mb-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="badge bg-warning text-dark me-2 mb-2"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto">

                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark btn-sm me-2 mb-2"
                        >
                            <i className="bi bi-github me-2"></i>
                            GitHub
                        </a>
                    )}

                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-warning btn-sm mb-2"
                        >
                            <i className="bi bi-box-arrow-up-right me-2"></i>
                            Live Demo
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
}