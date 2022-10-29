import Image from 'next/image';
import styled from 'styled-components';
import { StyledCard } from './StyledCard'
import { ExperienceBar } from '../ExperienceBar';

// FAICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs,
        faFigma,
        faReact, 
        faGitAlt, 
        faGithub, 
        faHtml5, 
        faCss3Alt,
        faPhp
    } from "@fortawesome/free-brands-svg-icons";


const StyledSkillCard = styled(StyledCard)`

    width: 11rem;
    max-height: 16rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    
    .skillName{
        font-weight: 600;
        font-size: 1.5rem;
        text-align: center;
        color: var(--white-1);
        line-height: 100%;
        margin: 0 auto;
        width: 100%;
        white-space:nowrap;
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
        background-color: var(--blue-1);
        display: flex;
        align-items:center;
        justify-content: center;
        margin: 1rem auto;
        
        & .multiIcon{
            /* background-color: #ffffff50; */
            /* display:flex; */
            /* gap: .5rem; */
            width: 64%;
            height: 64%;
            position: relative;

            & .skillIcon:nth-child(odd){
                top: 0;
                left:0;
            }

            & .skillIcon:nth-child(even){
                right: 0;
                bottom:0;
            }

            & .skillIcon{
                position: absolute;
                width: 1.7rem;
                height: 1.7rem;
            }
        }

        & .skillIcon{
            margin: auto;
            /* color: var(--white-1); */
            color: var(--blue-3);
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
                {skillName == 'HTML/CSS' && 
                    <div className="multiIcon">
                        <FontAwesomeIcon className="skillIcon" icon={faHtml5} />
                        <FontAwesomeIcon className="skillIcon" icon={faCss3Alt} />
                    </div>
                }
                {skillName == 'React' && <FontAwesomeIcon className="skillIcon" icon={faReact} />}
                {skillName == 'Git/GitHub' && 
                    <div className="multiIcon">
                        <FontAwesomeIcon className="skillIcon" icon={faGitAlt} />
                        <FontAwesomeIcon className="skillIcon" icon={faGithub} />
                    </div>
                }
                {skillName == 'Figma' && <FontAwesomeIcon className="skillIcon" icon={faFigma} />}
                {skillName == 'PHP' && <FontAwesomeIcon className="skillIcon" icon={faPhp} />}
            </div>
            {progress && <ExperienceBar progress={progress}/>}
        </StyledSkillCard>
    )
}

export { SkillCard }