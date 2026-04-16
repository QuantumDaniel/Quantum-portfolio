import { useState, useEffect } from 'react';
import './Navbar.css';

export default function NavbarComponent() {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    const closeNav = () => setExpanded(false);
    const toggleNav = () => setExpanded(prev => !prev);

    useEffect(() => {
        function checkScroll() {
            setScrolled(window.scrollY > 60)
        }
        window.addEventListener("scroll", checkScroll)
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top navbar-custom header ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <a className="navbar-brand fw-bold text-warning" href="#home">
                    <span className="brand-icon">{'<'}</span>
                    QUANTUM
                    <span className="brand-icon">{'/>'}</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
                    aria-controls="navbarNav"
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {[
                            ['#home', 'Home'],
                            ['#about', 'About'],
                            ['#skills', 'Skills'],
                            ['#projects', 'Projects'],
                            ['#experience', 'Experience'],
                            ['#other-skills', 'Other Skills'],
                            ['#book', 'Book'],
                            ['#contact', 'Contact'],
                        ].map(([href, label]) => (
                            <li className="nav-item" key={href}>
                                <a className={`nav-link nav-animated ${active === label ? "active-item" : ""}`} href={href} onClick={() => { closeNav, setActive(label) }}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}