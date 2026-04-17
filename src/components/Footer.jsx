import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section py-5">
            <div className="container">

                {/* Footer Content */}
                <div className="row g-4 mb-5">

                    {/* About */}
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-col">
                        <h5 className="footer-title mb-3">About</h5>
                        <p className="text-secondary">
                            Front-End Developer passionate about creating beautiful, responsive web applications
                            with expertise in medical imaging and technical writing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-col">
                        <h5 className="footer-title mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#home" className="footer-link">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#about" className="footer-link">About</a>
                            </li>
                            <li className="mb-2">
                                <a href="#projects" className="footer-link">Projects</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="footer-link">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Me */}
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-col">
                        <h5 className="footer-title mb-3">Follow Me</h5>
                        <div className="footer-social">
                            <a href="https://github.com/QuantumDaniel" target="_blank" rel="noreferrer" className="me-3 fs-4">
                                <i className="bi bi-github"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/abur-daniel-ba01b1217" target="_blank" rel="noreferrer" className="me-3 fs-4">
                                <i className="bi bi-linkedin"></i>
                            </a>

                            <a href="https://web.facebook.com/daniel.abur.31/directory_links" target="_blank" rel="noreferrer" className="me-3 fs-4">
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a href="mailto:aburorhambagadaniel@gmail.com" className="fs-4 text-yellow">
                                <i className="bi bi-envelope-heart text-yellow"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                {/* Bottom Bar */}
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 text-secondary">&copy; {currentYear} Daniel. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center text-md-end">
                        <a href="#home" className="back-to-top text-decoration-none">
                            <i className="bi bi-arrow-up-circle me-2"></i>Back to Top
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}