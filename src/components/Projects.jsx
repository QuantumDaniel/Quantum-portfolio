import ProjectCard from './ProjectCard';
import './Projects.css';
import img1 from "../assets/Quiz.PNG";
import img2 from "../assets/portflio.PNG";
import img3 from "../assets/Tech-bridge.PNG";
import img4 from "../assets/weather.PNG";
import img5 from "../assets/book.PNG";
import img6 from "../assets/calculator.PNG";
import img7 from "../assets/Quote.PNG";
import img8 from "../assets/form.PNG";
import img9 from "../assets/exam-calculator.PNG";


export default function Projects() {
    const projects = [
        {
            id: 1,
            image: `${img1}`,
            title: 'Maths Quiz App',
            description:
                'A responsive Maths Quiz App built with React featuring Multiple Questions, countdown timer and instant result feedback upon submision.',
            technologies: ['React.js', 'JavaScript', 'CSS'],
            githubLink: 'https://github.com/QuantumDaniel/maths-game2',
            liveLink: 'https://quantumdaniel.github.io/maths-game2/',
        },
        {
            id: 2,
            image: `${img2}`,
            title: 'Portfolio Website',
            description:
                'A modern, fully responsive portfolio website showcasing projects and skills with smooth scrolling and interactive elements.',
            technologies: ['React.js', 'Bootstrap', 'CSS3', 'Responsive Design'],
            githubLink: 'https://github.com/QuantumDaniel/Quantum-portfolio/tree/main/Quantum-portfolio',
            liveLink: 'https://quantum-portfo.netlify.app/',
        },
        {
            id: 3,
            image: `${img3}`,
            title: 'Quantum Tech Bridge Website',
            description:
                'A website that teaches people how to get into into tech with just their smartphones.',
            technologies: ['React.js', 'JavaScript', 'CSS'],
            technologies: ['React.js', 'JavaScript', 'CSS'],
            githubLink: 'https://github.com/QuantumDaniel/Quantum-Tech-Bridge',
            liveLink: 'https://quantum-tech-bridge.netlify.app/',
        },
        {
            id: 4,
            image: `${img4}`,
            title: 'Weather Dashboard',
            description:
                'A weather application displaying current conditions and forecasts.',
            technologies: ['API', 'Bootstrap', 'JavaScript', 'CSS3'],
            githubLink: 'https://github.com/QuantumDaniel/weather-app/tree/main',
            liveLink: 'https://weather-codition.netlify.app/',
        },
        {
            id: 5,
            image: `${img5}`,
            title: 'Book Website',
            description:
                'A book website showing book details with free download chapter.',
            technologies: ['React.js', 'Bootstrap', 'JavaScript', 'CSS Grid'],
            githubLink: 'https://github.com/QuantumDaniel/Quantum-books',
            liveLink: 'https://dont-guess-your-future.netlify.app/',
        },
        {
            id: 6,
            image: `${img6}`,
            title: 'Calculator App',
            description:
                'A fully functional calculator with responsive design.',
            technologies: ['JavaScript', 'CSS'],
            githubLink: 'https://github.com/QuantumDaniel/Maths-calculator2/',
            liveLink: 'https://quantumdaniel.github.io/Maths-calculator2/',
        },
        {
            id: 7,
            image: `${img7}`,
            title: 'Quote Generator',
            description:
                'A fully functional Quote Generator with responsive design, dark mode, and copy button.',
            technologies: ['JavaScript', 'CSS', 'Bootstrap'],
            githubLink: 'https://github.com/QuantumDaniel/Quote-Generator/',
            liveLink: 'https://quantumdaniel.github.io/Quote-Generator/',
        },
        {
            id: 8,
            image: `${img8}`,
            title: 'Ultrasound Report form',
            description:
                'A fully functional Abdominal/pelvic Ultrasound report form with responsive design and print button.',
            technologies: ['JavaScript', 'CSS', 'Bootstrap'],
            githubLink: 'https://github.com/QuantumDaniel/Ultrasound-report-form/',
            liveLink: 'https://quantumdaniel.github.io/Ultrasound-report-form/',
        },
        {
            id: 9,
            image: `${img9}`,
            title: 'Exam Calculator',
            description:
                'A fully functional exam calculator with print button for calculating student grades and remark.',
            technologies: ['JavaScript', 'CSS'],
            githubLink: 'https://github.com/QuantumDaniel/exam-calculator/',
            liveLink: 'https://quantumdaniel.github.io/exam-calculator/',
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