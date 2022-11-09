import styled from 'styled-components'

const StyledNavBar = styled.div`

    .navbar{
      padding: 1rem 2r;
      
      & .container{
        display: flex;
        padding: 1rem 2rem;
      }
    }
    .logo{
      width: fit-content;
    }
    .navlinks{
      display: flex;
      gap: 1rem;
      list-style-type: none;
      margin: 0;
      padding: 0;
      margin-left: auto;

      & li {
        color: var(--white-1)
      }
    }

`;

export { StyledNavBar }