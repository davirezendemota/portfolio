import Head from 'next/head'
import Image from 'next/image'

import { StyledHome } from "../StyledComponents/StyledHome";
import { Button } from "../components/Button";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import { SocialIcons } from "../components/SocialIcons";
import devVetor from "../assets/img/dev-vetor--cutted.png";
import profilePicture from "../assets/img/profile__picture.png";


export default function Home() {

    const projectDB = [
        {
            tit: 'davimota.com',
            desc: 'My website to unify personal projects, tools, carrer history, certicates and degrees.',
            techs: [ 'NextJs', 'ReactJs', 'JavaScript', 'CSS/HTML'],
            github: 'https://github.com/davirezendemota/davimota.com'
        }
    ]

    const skillDB = [
        {
            skillName: 'React',
            // progress: 0.6,
        },
        {
            skillName: 'JavaScript',
            // progress: 0.7,
        },
        {
            skillName: 'PHP',
            // progress: 0.4,
        },
        {
            skillName: 'HTML/CSS',
            // progress: 0.8,
        },
        {
            skillName: 'Git/GitHub',
            // progress: 0.8,
        },
        {
            skillName: 'Figma',
            // progress: 0.9,
        }
    ]


    return (
        <div>
            <Head>
                <title>Davi Mota | Home</title>
            </Head>
            <StyledHome className="Home">
                <section className="sct-1">
                    <div className="sct-1__content">
                        <h2>Hello, I am</h2>
                        <h1>Davi Mota</h1>
                        {/* <p>And this is my website!</p> */}
                        <p >Front-end Developer</p>
                        <Button link="./Davi_da_Mota_Rezende_-_Desenvolvedor_Frontend_Junior.pdf">HIRE ME</Button>
                    </div>
                    <Image src={devVetor} alt="Davi Mota" className="dev__vetor__img" />
                </section>
                <section className="about">
                    <div className="about__profile">
                        <Image src={profilePicture} alt="Profile Picture" className="about__profile__picture" />
                        <span className="about__profile__nome">Davi Mota</span>
                    </div>
                    <div className="about__content">
                        <h2>About me</h2>
                        <p>
                            I am a self taught software developer, able to bring knowledge in design, creation and maintenance of software systems.
                            <br/>
                            <br/>
                            Partner and Front-end development leader at ACB WEB, a company focused on creation of customized online systems for companies.
                        </p>
                        <SocialIcons />
                    </div>
                </section>
                <section className="portfolio">
                    <h2>Projects</h2>
                    <Carousel variant="projects" data={projectDB} />
                </section>
                <section className="skills">
                    <h2>Skills</h2>
                    <Carousel variant="skills" data={skillDB} controls/>
                        {/* <Card skillName="React" variant="SkillCard" />
                        <Card skillName="JavaScript" variant="SkillCard" />
                        <Card skillName="PHP" variant="SkillCard" />
                        <Card skillName="HTML/CSS" variant="SkillCard" />
                        <Card skillName="Git/GitHub" variant="SkillCard" />
                        <Card skillName="Figma" variant="SkillCard"/> */}
                </section>
                <section className="contact">
                    <h2>Contact</h2>
                    <SocialIcons />
                </section>
            </StyledHome>
        </div>
    )
}