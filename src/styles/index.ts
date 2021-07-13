import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        background: #EAC9FF;
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
    html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;
        
        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        outline: 0;
        font-family: 'Poppins', sans-serif;
    }
    body {
        background: url(/background.svg) no-repeat center center fixed;
        background-size: cover;
    }
    :root {
        --purple: #9E00FF;
        --lighter-purple: #EAC9FF;
        --darker-purple: #7C00F3;
        --yellow: #FFF500;
    }
`;
