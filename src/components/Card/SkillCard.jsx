import Image from 'next/image';
import styled from 'styled-components';
import { StyledCard } from './StyledCard'
import { ExperienceBar } from '../ExperienceBar';

// FAICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs,
        faFigma,
        faReact, 
        faGitAlt, 
        faGithub, 
        faHtml5, 
        faCss3Alt,
        faPhp,
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
        margin: 1rem auto 0 auto;
        
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


function SkillCard({data}) {

    const { skillName, progress } = data;

    function renderSwitch(skillName)
    {
        switch(skillName){
            case 'JavaScript':
                return <FontAwesomeIcon className="skillIcon" icon={faSquareJs} />;
            case 'HTML/CSS':
                return (
                    <div className="multiIcon">
                        <FontAwesomeIcon className="skillIcon" icon={faHtml5} />
                        <FontAwesomeIcon className="skillIcon" icon={faCss3Alt} />
                    </div>
                );
            case 'React':
                return <FontAwesomeIcon className="skillIcon" icon={faReact} />;
            case 'Git/GitHub':
                return (
                    <div className="multiIcon">
                        <FontAwesomeIcon className="skillIcon" icon={faGitAlt} />
                        <FontAwesomeIcon className="skillIcon" icon={faGithub} />
                    </div>
                );
            case 'Figma':
                return <FontAwesomeIcon className="skillIcon" icon={faFigma} />;
            case 'PHP':
                return <FontAwesomeIcon className="skillIcon" icon={faPhp} />;
            default:
                return '';
        }
    }

    return (
        <StyledSkillCard>
            <span className="skillName">{skillName}</span>
            <div className="skillLogo">
                {renderSwitch(data.skillName)}
            </div>
            {progress && <ExperienceBar progress={progress}/>}
        </StyledSkillCard>
    )
}

export { SkillCard }