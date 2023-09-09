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


        .dev__vetor__img {
            max-width: 30rem;
            max-height: 30rem;
        }

        .sct-1 {
            min-height: 32rem;
            display: flex;
            justify-content: center;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            row-gap: 2.5rem;
            /* padding: 0 5rem; */
        }

        .sct-1__content {
            /* max-width: 22rem; */
            display: flex;
            flex-direction: column;
            /* margin-right: auto; */

            & h2{
                font-size: 2rem;
                color: var(--white-1);
            }

            & p{
                color: var(--white-1);
            }

            & h2, & h1, & p{
                white-space: nowrap;
            }
        }

        .container__wave {
            position: relative;
            margin-top: 19rem;
        }

        .about {
            margin: 0 auto;
            min-height: 20rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            row-gap: 2.5rem;

            & h2{
                margin: 0;
                line-height: 100%;
            }
        }

        .about__content {
            min-width: 30rem;
            max-width: 100%;
            padding: 3rem 2rem;
            color: var(--white-1);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: space-between;
            align-items: start;
            /* width: 100%; */
            border-radius: 1.2rem;
            background-color: var(--blue-1);
            flex: 1;
            /* background-color: blue; */
        }
        
        .about__profile {
            height: 100%;
            display: flex;
            flex-direction: column;
            /* padding: 0 2rem; */
            margin-right: 2.5rem;
        }
        
        .about__content p {
            font-size: 1rem;
            font-weight: 500;
            text-overflow: hidden;
            max-width: 100% // TEMP
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

        .about__content h3 {
            font-size: 1.5rem;
            font-weight: 600;
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
