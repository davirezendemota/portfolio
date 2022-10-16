import styled from "styled-components";

const StyledSocialIcons = styled.div`

    display: flex;
    justify-content: center;
    gap: 1.2rem;
    color: var(--blue-3);
    font-size: 2rem;
        
    & svg{
        cursor: pointer;
        transition: color 500ms;
    }

    & svg:hover{
        color: var(--white-1);
    }
`;

export {StyledSocialIcons};