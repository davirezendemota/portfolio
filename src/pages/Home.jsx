// STYLED
import { StyledHome } from "./StyledHome";

// LOCAL COMPONENTS
import { Navbar } from '../components/Navbar';
import { Button } from "../components/Button";
import { SocialIcons } from "../components/SocialIcons";
import { Carousel } from "../components/Carousel";
import { Footer } from '../components/Footer';

// ASSETS
import devVetor from "../assets/img/dev-vetor--cutted.png";
import profilePicture from "../assets/img/profile__picture.jpg";

// DB
import { projectDB, skillDB } from '../db.js'

export default function Home() {

  document.title = 'Davi Mota | Home'

  return (
    <>
      <Navbar />
      <StyledHome className="Home">
        {/* SECTION */}
        <section className="sct-1">
          <div className="sct-1__content">
            <h2>Hello, I am</h2>
            <h1>Davi Mota</h1>
            <p >Front-end Developer</p>
            <Button link="/Davi_Mota_Software_Developer.pdf">HIRE ME</Button>
          </div>
          <img src={devVetor} alt="Davi Mota" className="dev__vetor__img" />
        </section>
        {/* SECTION */}
        <section className="about">
          <div className="about__profile">
            <img src={profilePicture} alt="Profile Picture" className="about__profile__picture border-primary-400" />
            <span className="about__profile__nome">Davi Mota</span>
          </div>
          <div className="about__content">
            <h2>About me</h2>
            <p>
              Self-taught Software Developer with expertise in designing, creating, and maintaining software systems.
              <br />
              <br />
              A proficient problem solver, skilled in software development and adept at working with diverse data structures
            </p>
            <SocialIcons />
          </div>
        </section>
        {/* SECTION */}
        {/*
        <section className="portfolio">
          <h2>Projects</h2>
          <Carousel variant="projects" data={projectDB} />
        </section>
        */}
        {/* SECTION */}
        <section className="skills">
          <h2>Skills</h2>
          <Carousel variant="skills" data={skillDB} controls />
        </section>
        {/* SECTION */}
        <section className="contact">
          <h2>Contact</h2>
          <SocialIcons />
        </section>
      </StyledHome>
      <Footer />
    </>
  )
}
