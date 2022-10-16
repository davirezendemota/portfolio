import styled from "styled-components";

const StyledCarousel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 2rem;

    .carousel__group{
        display: flex;
        justify-content: start;
        gap: 10px;
        overflow: hidden;
        scroll-behavior: smooth;
    }

    & svg{
        background-color: var(--blue-3);
        padding: 8px;
        font-size: 2rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        color: var(--white-1);
        cursor: pointer;
        transition: all 300ms;

        &:hover{
            color: var(--blue-3);
            background-color: var(--white-1-1);
        }
    }

`;

export { StyledCarousel }