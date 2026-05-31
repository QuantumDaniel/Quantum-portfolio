import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import OtherSkills from '../components/OtherSkills';
import Book from '../components/Book';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import TopButton from '../components/TopButton';

export default function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <OtherSkills />
            <TopButton />
            <Book />
            <Contact />
            <Footer />
        </div>
    );
}