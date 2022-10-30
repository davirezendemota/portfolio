import styled from "styled-components";

const StyledHome = styled.div`
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        margin: 3rem auto;
        gap: 3rem;
        max-width: 90rem;

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

            & h2{
                font-size: 2rem;
                color: var(--white-1);
            }

            & p{
                color: var(--white-1);
            }
        }

        .container__wave {
            position: relative;
            margin-top: 19rem;
        }

        .about {
            margin: 0 auto;
            padding: 3rem 0;
            width: 100%;
            min-height: 20rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .about__profile {
            height: 100%;
            display: flex;
            flex-direction: column;
            /* padding: 0 2rem; */
            margin-right: 2.5rem;
        }

        .about__profile__picture {
            height: 15rem;
            width: 15rem;
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
            padding: 3rem 2rem;
            color: var(--white-1);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: start;
            width: 100%;
            border-radius: 1.2rem;
            background-color: var(--blue-1);
            /* background-color: blue; */
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

        .contact p{
            font-size: 1rem;
            text-align: center;
            margin-bottom: 1.5rem;
            max-width: 80%;
            font-weight: 400;
        }

        .skills h2,
        .portfolio h2,
        .contact h2{
            margin-bottom: 1.5rem;
        }
    `;

export { StyledHome }
