import { createGlobalStyle  } from "styled-components";

const globalStyle = createGlobalStyle`

    :root {
        --black-1: #000000;
        --blue-1: #011028;
        --blue-1-1: #08005C;
        --blue-2: #150A84;
        --blue-3: #1400F5;
        --white-1: #ffffff;
        --white-1-1: #DEDEDE;
        --gradient-1: radial-gradient(75.41% 121.9% at 50% 50%, #0C008F 0%, #000000 100%);
    }

    * {
        font-family: 'Poppins';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--black-1);
    }

    #root {
        position: relative;
    }

    header {
        position: absolute;
        top: 0;
        left: 0;
    }

    a {
        text-decoration: none;
    }

    footer {
        padding: 0 5rem;
        height: 6rem;
    }

    h1 {
        font-size: 4rem;
        font-weight: 500;
        color: var(--white-1);
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--blue-2);
    }

    p {
        font-size: 1.5rem;
        color: var(--white-1);
        font-weight: 500;
    }

`;

export default globalStyle