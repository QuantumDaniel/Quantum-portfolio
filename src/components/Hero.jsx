import './Hero.css';
import profile from '../assets/profile1.jpeg'

export default function Hero() {
    return (
        <section id="home" className="py-5 bg-dark text-light">
            <div className="container">
                <div className="row align-items-center g-5">

                    <div className="col-lg-6 text-content">
                        <h1 className="display-4 fw-bold mb-3 mt-4 ">
                            Hi, I'm <span className="text-warning ">Daniel</span>
                        </h1>

                        <h2 className="h4  mb-4">
                            Physicist | Front-End Developer | Writer | Medical Imaging Enthusiast | Aspiring Medical Physicist
                        </h2>

                        <p className="lead text-secondary mb-4">
                            A passionate front-end developer with a unique blend of expertise in web development,
                            medical imaging, research writing, and graphics design.
                        </p>

                        <a href="#projects" className="btn btn-warning btn-lg me-3 mb-2 fw-bold">
                            View Projects
                        </a>

                        <a href="#contact" className="btn btn-outline-light btn-lg mb-2 fw-bold">
                            Contact Me
                        </a>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            loading='lazy'
                            src={profile}
                            alt="Daniel"
                            className="img-fluid rounded-4 shadow-lg mt-4 profile-image"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}