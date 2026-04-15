import { useState } from "react";
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <section id="contact" className="contact-section py-5">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="mb-3">Get In Touch</h2>
                    <p className="text-secondary lead">
                        Have a question or project? I'd love to hear from you. Let's connect!
                    </p>
                </div>

                <div className="row g-5">

                    {/* Form */}
                    <div className="col-lg-6">
                        <form className="contact-form">

                            <div className="mb-4">
                                <label className="form-label fw-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="form-control form-control-lg contact-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="form-control form-control-lg contact-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-bold mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    placeholder="Write your message here..."
                                    className="form-control contact-input"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button className="btn btn-warning btn-lg fw-bold w-100">
                                <i className="bi bi-send me-2"></i>
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-6">
                        <div className="contact-info">

                            <h4 className="mb-4 fw-bold">Other Ways to Connect</h4>

                            <div className="d-flex align-items-start mb-4">
                                <i className="bi bi-envelope fs-4 me-3"></i>
                                <div>
                                    <h6 className="fw-bold">iEmal</h6>
                                    <p className="text-secondary mb-0">aburorhambagadaniel@gmail.com</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                                <i className="bi bi-geo-alt fs-4 me-3"></i>
                                <div>
                                    <h6 className="fw-bold">Location</h6>
                                    <p className="text-secondary mb-0">Benue State, Nigeria</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-5">
                                <i className="bi bi-telephone fs-4 me-3"></i>
                                <div>
                                    <h6 className="fw-bold">Phone</h6>
                                    <p className="text-secondary mb-0">+2349042898107</p>
                                </div>
                            </div>

                            <h5 className="mb-4 fw-bold">Follow Me</h5>

                            <div>
                                <a href="https://github.com/QuantumDaniel" target="_blank" rel="noreferrer" className="me-3 fs-4">
                                    <i className="bi bi-github"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/abur-daniel-ba01b1217" target="_blank" rel="noreferrer" className="me-3 fs-4">
                                    <i className="bi bi-linkedin"></i>
                                </a>

                                <a href="https://web.facebook.com/daniel.abur.31/directory_links" target="_blank" rel="noreferrer" className="me-3 fs-4">
                                    <i className="bi bi-facebook"></i>
                                </a>

                                <a href="mailto:aburorhambagadaniel@gmail.com" className="fs-4">
                                    <i className="bi bi-envelope-heart"></i>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}