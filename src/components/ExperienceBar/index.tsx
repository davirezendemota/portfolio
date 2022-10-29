import styled from "styled-components";

const StyledExperienceBar = styled.div<{progress: number}>`
    height: .5rem;
    width:  100%;
    background-color: var(--blue-1-1);
    border-radius: 1rem;
    overflow: hidden;
    
    .progressBar{
        height: 100%;
        width: ${(props) => props.progress};
        background-color: var(--blue-3);
    }
`;

const ExperienceBar = ({progress}) => {
    
    progress = `${progress * 100}%`

    return(
        <StyledExperienceBar progress={progress}>
        <div className="progressBar"/>
        </StyledExperienceBar>
    )
}

export { ExperienceBar }