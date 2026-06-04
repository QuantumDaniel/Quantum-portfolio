import './OtherSkills.css';
import { Ansible, Atom, Canva, ChatGPT, Microsoft, Notion } from 'developer-icons';


export default function OtherSkills() {
    const skills = [
        {
            id: 1,
            icon: Microsoft,
            title: 'Microsoft Office Suite',
            description: 'Proficient in Microsoft Word, Excel, and PowerPoint for professional document creation and data analysis.',
        },

        {
            id: 2,
            icon: Canva,
            title: ' Graphic Design',
            description: 'Professional Gaphics design with canva and simillar tools.',
        },
        {
            id: 3,
            icon: Canva,
            title: 'Video Editing',
            description: 'Video production and editing using Canva, CapCut and similar tools.',
        },
        {
            id: 4,
            icon: Notion,
            title: 'Content Writing',
            description: 'Creating clear, comprehensive content writing and guides.',
        },
        {
            id: 5,
            icon: Ansible,
            title: 'Computer Maintenance',
            description: 'System optimization, troubleshooting, and software installation.',
        },
        {
            id: 6,
            icon: ChatGPT,
            title: 'AI tools',
            description: 'Using AI tools for writing, image creation, Avatar/movie video creation and Research',
        },
        {
            id: 7,
            icon: Atom,
            title: 'Medical image processing',
            description: 'Using specialized software for medical image analysis and visualization.',
        }

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
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div className="col-lg-4 col-md-6 col-12 " key={skill.id}>

                                <div className="card h-100 shadow-sm border-0 text-center p-4 skill-card">

                                    {/* Icon */}
                                    <div className="mb-3">
                                        {/*<i className={`bi ${skill.icon} fs-2 text-primary`}></i>*/}
                                        <Icon className="fs-2 mb-2" />
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
                        )
                    })}
                </div>

            </div>
        </section>
    );
}