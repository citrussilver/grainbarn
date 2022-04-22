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
        --pale-dirty-white: #e4e0d5;
        --pale-yellow: #F1ECC3;
        --pale-brown: #7C7575;
        --color1: #F1ECC3;
        --color2: #eefcef;
        --color3: #e6f5fa;
        --color4: #f9f8f3;
    }

    .multi-info-card {
        background-color: var(--pale-dirty-white);
        margin: 1rem;
        padding: 1.5rem 2rem;
        border-radius: 1rem;
    }

    .test {
        border-style: hidden dashed hidden;
        border-color: var(--pale-dark-green);
    }

    .color1 {
        background-color: var(--color1);
    }

    .color2 {
        background-color: var(--color2);
    }

    .color3 {
        background-color: var(--color3);
    }

    .color4 {
        background-color: var(--color4);
    }

    @media (max-width: 768px) {
        .sidebar-menu {
            display: none;
        }
    }
`

export default GlobalStyles