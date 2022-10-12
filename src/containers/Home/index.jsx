//import Button from "../../components/Button"
import { Button } from "../../components/Button"
import { StyledHome } from "../../containers/StyledHome"

function Home() {
    return (
        <StyledHome classNam    e='Home px-5'>
            <section className="sct-1">
                <div className="sct-1__content">
                    <h2>DESENVOLVEDOR FRONT-END</h2>
                    <h1>Davi Mota</h1>
                    <p>Lörem ipsum plajöngen vöplavunyl som viras pevibel än mir anadovis såsom kartad. </p>
                    <Button type="1">HIRE ME</Button>
                </div>
                <div className="dev__vetor">
                    <img src="../src/assets/img/dev-vetor--cutted.png" alt="Davi Mota" className="dev__vetor__img"/>
                </div>
            </section>
            {/* <section className="sct-2">
                <div className="about__profile" style="color: white">
                    <img src="src/img/profile__picture.png" alt="Profile Picture" className="about__profile__picture"></img>
                    <span className="about__profile__nome">Davi Mota</span>
                    <div className="about__profile__links">
                        <i className="fa-solid fa-envelope"></i>
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="about__content">
                    <h2>Sobre</h2>
                    <h3>Conheça um pouco sobre mim</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium sapiente exercitationem? Odio qui, sapiente beatae laborum tenetur dolorum sed nobis doloremque quasi accusantium, quos, praesentium corrupti perferendis provident quas?

                        Cumque reprehenderit, accusamus voluptatem cupiditate tempora laborum modi voluptatibus! Fuga praesentium nemo hic. Porro quam quas, optio sequi pariatur voluptatum ad nemo nobis aut excepturi accusamus necessitatibus praesentium iure! Cupiditate?</p>
                </div>
            </section> */}
        </StyledHome>
    )
}

export default Home
