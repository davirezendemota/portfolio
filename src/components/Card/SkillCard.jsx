import styled from 'styled-components';
import { StyledCard } from './StyledCard'
import { ExperienceBar } from '../ExperienceBar';

// FAICONS
import { FaSquareJs, FaHtml5, FaCss3, FaGitAlt, FaGithub, FaFigma, FaPhp, FaReact, FaDocker } from 'react-icons/fa6'

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
                return <FaSquareJs className="skillIcon"/>;
            case 'HTML/CSS':
                return (
                    <div className="multiIcon">
                        <FaHtml5 className="skillIcon"/>
                        <FaCss3 className="skillIcon"/>
                    </div>
                );
            case 'React':
                return <FaReact className="skillIcon"/>;
            case 'Git/GitHub':
                return (
                    <div className="multiIcon">
                        <FaGitAlt className="skillIcon"/>
                        <FaGithub className="skillIcon"/>
                    </div>
                );
            case 'Figma':
                return <FaFigma className="skillIcon" />;
            case 'PHP':
                return <FaPhp className="skillIcon"/>;
            case 'Docker':
                return <FaDocker className="skillIcon"/>;
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
