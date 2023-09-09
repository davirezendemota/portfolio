import { StyledSocialIcons } from "./StyledSocialIcons";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";

function SocialIcons (){
    return (
        <StyledSocialIcons>
            <FaGithub onClick={() => {window.location="https://github.com/davirezendemota"}}/>
            <FaEnvelope onClick={() => {window.location="mailto:davi@rmconsult.io"}} />
            <FaLinkedin onClick={() => {window.location="https://linkedin.com/in/davirezendemota"}}/>
        </StyledSocialIcons>
    )
}

export { SocialIcons };
