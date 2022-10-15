import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { StyledHome } from "../../containers/Home/StyledHome";
import { SocialButtons } from "../../components/SocialButtons";
// FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <StyledHome className='px-5'>
                <section className="sct-1">
                    <div className="sct-1__content">
                        <h2>DESENVOLVEDOR FRONT-END</h2>
                        <h1>Davi Mota</h1>
                        <p>Lörem ipsum plajöngen vöplavunyl som viras pevibel än mir anadovis såsom kartad. </p>
                        <Button type="1">HIRE ME</Button>
                    </div>
                    <div className="dev__vetor">
                        <img src="../src/assets/img/dev-vetor--cutted.png" alt="Davi Mota" className="dev__vetor__img" />
                    </div>
                </section>
                <section className="about">
                    <div className="about__profile">
                        <img src="../src/assets/img/profile__picture.png" alt="Profile Picture" className="about__profile__picture"></img>
                        <span className="about__profile__nome">Davi Mota</span>
                        <SocialButtons />
                    </div>
                    <div className="about__content">
                        <h2>Sobre</h2>
                        <h3>Conheça um pouco sobre mim</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium sapiente exercitationem? Odio qui, sapiente beatae laborum tenetur dolorum sed nobis doloremque quasi accusantium, quos, praesentium corrupti perferendis provident quas?</p>
                        <p>Cumque reprehenderit, accusamus voluptatem cupiditate tempora laborum modi voluptatibus! Fuga praesentium nemo hic. Porro quam quas, optio sequi pariatur voluptatum ad nemo nobis aut excepturi accusamus necessitatibus praesentium iure! Cupiditate?</p>
                    </div>
                </section>
                <section className="portfolio">
                    <h2>Portfolio</h2>
                    <Carousel></Carousel>
                </section>
                <section className="skills">
                    <h2>Skills</h2>
                    <Carousel></Carousel>
                </section>
                <section className="contact">
                    <h2>Contato</h2>
                    <p>Cumque reprehenderit, accusamus voluptatem cupiditate tempora laborum modi voluptatibus! Fuga praesentium nemo hic. Porro quam quas, optio sequi pariatur voluptatum ad nemo nobis aut excepturi accusamus necessitatibus praesentium iure! Cupiditate?</p>
                    <SocialButtons />
                </section>
        </StyledHome>
    )
}

export { Home }
