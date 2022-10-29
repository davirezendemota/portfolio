import styled from "styled-components";

const StyledCarousel = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;

    .carousel__group{
        display: flex;
        justify-content: center;
        gap: 1.8rem;
        overflow: hidden;
        scroll-behavior: smooth;
        margin: 0 auto;
    }

    & .scrollBtn{
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