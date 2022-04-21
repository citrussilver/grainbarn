import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;
        --special-font: 'Hind Siliguri', sans-serif;
        --commont-font: font-family: 'Barlow', sans-serif;
        --pale-green: #BFCBA8;
        --pale-dark-green: #5B8A72;
    }

    .mr-2 {
        margin-right: 0.5rem;
    }

    .ml-4 {
        margin-left: 1rem;
    }

    .ml-20 {
        margin-left: 5rem;
    }

    .text-2xl {
        font-size: 1.5rem;
        line-height: 2rem; 
    }

    .flex {
        display: flex;
    }
`

export default GlobalStyles