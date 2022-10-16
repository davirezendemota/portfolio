import styled from "styled-components";

const StyledCard = styled.div`
    
    .PortCard{
        background-color: var(--blue-1);
        width: 300px;
        height: 260px;
        display: flex;
        flex-direction: column;
        flex: 0;
        color: var(--white-1);
    }
    .title{
        font-size: 1.25rem
    }
    .description{
        font-size:1rem;
    }
    
`;

export { StyledCard };