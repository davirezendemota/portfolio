import { StyledSocialButtons } from "./StyledSocialButtons";
// FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialButtons (){
    return (
        <StyledSocialButtons>
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
        </StyledSocialButtons>
    )
}

export { SocialButtons };