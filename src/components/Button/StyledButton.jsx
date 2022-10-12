import styled from "styled-components";

const StyledButton = styled.button`
        width: 10rem;
        color: var(--blue-3);
        border: 2px solid var(--blue-3);
        border-radius: .5rem;
        padding: .5rem 2rem;
        margin: 2rem 0 0 0;
        font-size: 1.5rem;
        font-weight: 700;
        font-style: italic;
        white-space: nowrap;
        cursor: pointer;
        transition: background-color 500ms;
        overflow: visible;
        background: transparent;
        line-height: normal;

        &:hover{
            background-color: var(--white-1);
            color: var(--black-1);
            border-color: transparent;
        }
    `;

export { StyledButton }
