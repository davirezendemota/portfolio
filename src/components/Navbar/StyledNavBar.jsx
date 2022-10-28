import styled from 'styled-components'

const StyledNavBar = styled.div`
    .nav-link{
        color: white !important;
        font-weight: 600;
        font-size: 1.2rem;
    }
    .nav-link:hover{
        color: var(--blue-3) !important;
    }
    #navbarNavDropdown{
        justify-content: end !important;
    }
`;

export { StyledNavBar }