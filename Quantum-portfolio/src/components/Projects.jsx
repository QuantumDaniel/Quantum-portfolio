import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const projects = [
        {
            id: 1,
            image: 'https://via.placeholder.com/400x250?text=E-Commerce+Platform',
            title: 'E-Commerce Platform',
            description:
                'A responsive e-commerce website built with React and Bootstrap featuring product listings, shopping cart, and user authentication.',
            technologies: ['React.js', 'Bootstrap', 'JavaScript', 'CSS'],
            githubLink: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/400x250?text=Portfolio+Website',
            title: 'Portfolio Website',
            description:
                'A modern, fully responsive portfolio website showcasing projects and skills with smooth scrolling and interactive elements.',
            technologies: ['React.js', 'Bootstrap', 'CSS3', 'Responsive Design'],
            githubLink: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/400x250?text=Task+Manager+App',
            title: 'Task Manager App',
            description:
                'A task management application with features to create, edit, delete, and track tasks.',
            technologies: ['React.js', 'JavaScript', 'CSS', 'Local Storage'],
            githubLink: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/400x250?text=Weather+Dashboard',
            title: 'Weather Dashboard',
            description:
                'A weather application displaying current conditions and forecasts.',
            technologies: ['React.js', 'API', 'Bootstrap', 'JavaScript'],
            githubLink: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/400x250?text=Blog+Platform',
            title: 'Blog Platform',
            description:
                'A blogging platform allowing users to create and manage posts.',
            technologies: ['React.js', 'Bootstrap', 'JavaScript', 'CSS Grid'],
            githubLink: 'https://github.com',
            liveLink: 'https://example.com',
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/400x250?text=Calculator+App',
            title: 'Calculator App',
            description:
                'A fully functional calculator with responsive design.',
            technologies: ['React.js', 'JavaScript', 'CSS'],
            githubLink: 'https://github.com',
            liveLink: 'https://example.com',
        },
    ];

    return (
        <section id="projects" className="projects-section py-5">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="mb-3">My Projects</h2>
                    <p className="text-secondary lead">
                        Here are some of my recent web development projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="row g-4">
                    {projects.map((project) => (
                        <div className="col-lg-4 col-md-6 col-12" key={project.id}>
                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}