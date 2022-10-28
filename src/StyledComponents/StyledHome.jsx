import styled from "styled-components";

const StyledHome = styled.div`
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        margin: 48px auto;
        gap: 48px;

        h2 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white-1);
        }

        .nav__link {
            color: var(--white-1);
            font-style: italic;
            font-weight: 700;
        }

        .dev__vetor {
            display: flex;
            align-items: center;
            justify-content: end;
            width: 40%;
        }

        .dev__vetor__img {
            width: 30rem;
            height: 30rem;
        }

        .sct-1 {
            height: 500px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* padding: 0 5rem; */
        }

        .sct-1__content {
            width: 50%;
            display: flex;
            flex-direction: column;
        }

        .container__wave {
            position: relative;
            margin-top: 19rem;
        }

        .about {
            padding: 50px 30px;
            width: 100%;
            min-height: 20rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            background-color: var(--blue-1);
            border-radius: 20px;
        }

        .about__profile {
            height: 100%;
            display: flex;
            flex-direction: column;
            /* padding: 0 2rem; */
            margin: 0 40px
        }

        .about__profile__picture {
            height: 240px;
            width: 240px;
            border-radius: 50%;
            border-width: 4px;
            border-style: solid;
        }

        .about__profile__nome {
            font-size: 2rem;
            text-align: center;
            margin: 1rem 0 0 0;
        }

        .about__profile__links {
            display: flex;
            justify-content: center;
            gap: 1.2rem;
            color: var(--blue-3);
            font-size: 2rem;
        }

        .about__profile__links svg {
            cursor: pointer;
            transition: color 500ms;
        }

        .about__profile__links svg:hover {
            color: var(--white-1);
        }

        .about__content {
            color: var(--white-1);
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .about__content h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .about__content p {
            font-size: 1rem;
            font-weight: 500;
        }

        .about__profile{
            color: white
        }

        .portfolio, .skills, .contact{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `;

export { StyledHome }
