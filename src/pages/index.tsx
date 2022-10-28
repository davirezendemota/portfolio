import Head from 'next/head'

import { StyledHome } from "../StyledComponents/StyledHome";
import { Button } from "../components/Button";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import { SocialIcons } from "../components/SocialIcons";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import devVetor from "../assets/img/dev-vetor--cutted.png";
import profilePicture from "../assets/img/profile__picture.png";


export default function Home() {
    return (
        <div>
            <Head>
                <title>Davi Mota - Dev Front-end</title>
            </Head>
            <Navbar/>
            <StyledHome className='px-5'>
                <section className="sct-1">
                    <div className="sct-1__content">
                        <h2>DESENVOLVEDOR FRONT-END</h2>
                        <h1>Davi Mota</h1>
                        <p>Lörem ipsum plajöngen vöplavunyl som viras pevibel än mir anadovis såsom kartad. </p>
                        <Button link="./Davi_da_Mota_Rezende_-_Desenvolvedor_Frontend_Junior.pdf">HIRE ME</Button>
                    </div>
                    <div className="dev__vetor">
                        {/* <img src={devVetor} alt="Davi Mota" className="dev__vetor__img" /> */}
                    </div>
                </section>
                <section className="about">
                    <div className="about__profile">
                        {/* <img src={profilePicture} alt="Profile Picture" className="about__profile__picture"></img> */}
                        <span className="about__profile__nome">Davi Mota</span>
                        <SocialIcons />
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
                    <Carousel>
                        <Card type="PortCard" />
                    </Carousel>
                </section>
                <section className="skills">
                    <h2>Skills</h2>
                    <Carousel>
                        <Card type="SkillCard" />
                    </Carousel>
                </section>
                <section className="contact">
                    <h2>Contato</h2>
                    <p>Cumque reprehenderit, accusamus voluptatem cupiditate tempora laborum modi voluptatibus! Fuga praesentium nemo hic. Porro quam quas, optio sequi pariatur voluptatum ad nemo nobis aut excepturi accusamus necessitatibus praesentium iure! Cupiditate?</p>
                    <SocialIcons />
                </section>
            </StyledHome>
            <Footer />
        </div>
    )
}