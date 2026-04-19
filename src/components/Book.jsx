
import './Book.css';
import coverPage from '../assets-webp/cover2.webp';

export default function Book() {
    return (
        <section id="book" className="book-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title mb-3 text-white">My Book</h2>
                    <p className="text-secondary lead">
                        A career guide resource for students navigating their future
                    </p>
                </div>

                <div className="row align-items-center g-5">
                    <div className="col-lg-5 col-md-12 text-center">
                        <div className="book-card card shadow-lg border-0">
                            <img
                                src={coverPage}
                                className="book-cover card-img-top"
                                alt="Book Cover"
                            />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="book-content">
                            <h3 className="book-title mb-3">
                                Don't Guess Your Future: A Career Guide for Students
                            </h3>
                            <p className="text-secondary mb-4 lead">
                                This comprehensive career guide is designed to help students make informed decisions
                                about their future. It provides practical advice, real-world insights, and actionable
                                strategies for navigating career choices, skill development, and professional growth.
                            </p>

                            <div className="book-highlights mb-4">
                                <h5 className="mb-3 fw-bold">What You'll Learn:</h5>
                                <ul className="list-unstyled">
                                    {[
                                        'Exploring career paths and finding your passion',
                                        'Building essential professional skills',
                                        'Networking and personal branding strategies',
                                        'Preparing for interviews and job applications',
                                        'Continuous learning and professional development',
                                    ].map((item) => (
                                        <li className="mb-2" key={item}>
                                            <i className="bi bi-check-circle-fill text-warning me-2"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="book-buttons">
                                <a
                                    href="https://1drv.ms/b/c/d6a759a2a54357fd/IQCAMQYrIvi2RI145QpxiulYAeqQiac0GMytI7tA3azzfgk?e=ezapO7" className="btn btn-warning btn-lg fw-bold me-3 mb-2"
                                    target='blank'
                                >
                                    <i className="bi bi-book me-2"></i>Download Full Book
                                </a>
                                <a href="/free_chapter_preview(1).pdf" className="btn btn-outline-warning btn-lg fw-bold mb-2" download >
                                    <i className="bi bi-download me-2"></i>Download Free Chapter
                                </a>
                            </div>

                            <div className="book-meta mt-4 pt-4 border-top">
                                <div className="row">
                                    {[
                                        { label: 'Author', value: 'Daniel' },
                                        { label: 'Pages', value: '150+' },
                                        { label: 'Category', value: 'Career Development' },
                                    ].map(({ label, value }) => (
                                        <div className="col-md-4 col-6 text-center mb-3" key={label}>
                                            <h6 className="text-muted mb-1">{label}</h6>
                                            <p className="fw-bold">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}