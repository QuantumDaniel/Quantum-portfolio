import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const projects = [
        {
            id: 1,
            image: '/src/assets/Quiz.PNG',
            title: 'Maths Quiz App',
            description:
                'A responsive Maths Quiz App built with React featuring Multiple Questions, countdown timer and instant result feedback upon submision.',
            technologies: ['React.js', 'JavaScript', 'CSS'],
            githubLink: 'https://github.com/QuantumDaniel/maths-game2',
            liveLink: 'https://quantumdaniel.github.io/maths-game2/',
        },
        {
            id: 2,
            image: 'src/assets/portflio.PNG',
            title: 'Portfolio Website',
            description:
                'A modern, fully responsive portfolio website showcasing projects and skills with smooth scrolling and interactive elements.',
            technologies: ['React.js', 'Bootstrap', 'CSS3', 'Responsive Design'],
            githubLink: 'https://github.com/QuantumDaniel/Quantum-portfolio/tree/main/Quantum-portfolio',
            liveLink: 'https://example.com',
        },
        {
            id: 3,
            image: '/src/assets/Tech-bridge.PNG',
            title: 'Task Manager App',
            description:
                'A website that teaches people how to get into into tech with just their smartphones.',
            technologies: ['React.js', 'JavaScript', 'CSS'],
            'A task management application with features to create, edit, delete, and track tasks.',
            technologies: ['React.js', 'JavaScript', 'CSS', 'Local Storage'],
            githubLink: 'https://github.com/QuantumDaniel/Quantum-Tech-Bridge',
            liveLink: 'https://quantum-tech-bridge.netlify.app/',
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