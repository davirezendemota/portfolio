import Image from 'next/image';
import styled from 'styled-components';
import { StyledCard } from './StyledCard'
import { ExperienceBar } from '../ExperienceBar';

// FAICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faFigma, faReact } from "@fortawesome/free-brands-svg-icons";


const StyledSkillCard = styled(StyledCard)`
    
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.8rem;
    
    .skillName{
        font-weight: 600;
        font-size: 1.5rem;
        text-align: center;
        color: var(--white-1);
        line-height: 100%;
    }
    
    .skillLogo{
        /* &:hover{
            background-color: var(--white-1-1);
        }
        &:hover .skillIcon{
            color: var(--blue-3);
        } */
        transition: all 300ms;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: var(--blue-1-1);
        display: flex;
        align-items:center;
        justify-content: center;
        margin: 1rem 1.2rem;
        
        & .skillIcon{
            margin: auto;
            color: var(--white-1);
            width: 3rem;
            height: 3rem;
        }
    }
    
    
`;


function SkillCard({skillName, progress = null}) {

    return (
        <StyledSkillCard>
            <span className="skillName">{skillName}</span>
            <div className="skillLogo">
                {/* <Image
                    style={{
                        objectFit: "contain"
                    }}
                    fill
                    src={skillLogo}
                    alt={skillName} 
                    /> */}
                {skillName == 'JavaScript' && <FontAwesomeIcon className="skillIcon" icon={faJs} />}
                {skillName == 'React' && <FontAwesomeIcon className="skillIcon" icon={faReact} />}
                {skillName == 'Figma' && <FontAwesomeIcon className="skillIcon" icon={faFigma} />}
            </div>
            {progress && <ExperienceBar progress={progress}/>}
        </StyledSkillCard>
    )
}

export { SkillCard }