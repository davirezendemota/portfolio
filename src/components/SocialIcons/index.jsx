import { StyledSocialIcons } from "./StyledSocialIcons";
// FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function SocialIcons (){
    return (
        <StyledSocialIcons>
            <FontAwesomeIcon onClick={() => {window.location="mailto:rezendemota.davi@gmail.com"}} icon={faEnvelope} />
            <FontAwesomeIcon onClick={() => {window.location="https://github.com/davirezendemota"}} icon={faGithub} />
            <FontAwesomeIcon onClick={() => {window.location="https://linkedin.com/in/davirezendemota"}} icon={faLinkedin} />
            <FontAwesomeIcon onClick={() => {window.location="https://instagram.com/davirezendemota"}} icon={faInstagram} />
        </StyledSocialIcons>
    )
}

export { SocialIcons };