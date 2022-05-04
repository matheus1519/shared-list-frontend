import { createGlobalStyle } from 'styled-components'

import { resetCss } from './resetCss'

export const GlobalStyles = createGlobalStyle`
    ${resetCss}

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body { 
        background: #1D3C73;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }



    h1, h2, h3, h4, h5, h6, button, p, li {
        font-family: 'Roboto', sans-serif;
    }
`
