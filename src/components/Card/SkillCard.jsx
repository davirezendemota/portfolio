import Image from 'next/image';
import styled from 'styled-components';
import { StyledCard } from './StyledCard'
import logoJS from '../../../public/JS-logo.png';
import { ExperienceBar } from '../ExperienceBar';

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
    
    .techLogo{
        width: 5rem;
        height: 5rem;
        border-radius: 10px;
        margin: 1rem 1.2rem;
    }
    
`;


function SkillCard() {

    const progressTEMP = 0.5;

    return (
        <StyledSkillCard>
            <span className="skillName">JavaScript</span>
            <Image 
                src={logoJS}
                alt="skillName" 
                className="techLogo"
            />
            <ExperienceBar progress={progressTEMP}/>
        </StyledSkillCard>
    )
}

export { SkillCard }