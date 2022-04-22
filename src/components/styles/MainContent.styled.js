import styled from 'styled-components'

export const StyledMainContent = styled.div`
    opacity: 0;
    background-color: var(--pale-green);
    font-family: var(--commont-font);
    font-weight: 100;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    animation-name: playlist-animate;
    animation-duration: var(--ani-duration);
    animation-fill-mode: var(--ani-fill-mode);

    @keyframes playlist-animate {
        to {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        display: block;
        padding: 1rem 0;
    }
`
export const StyledArticle = styled.article`
    border-style: hidden dashed hidden;
    border-color: var(--pale-dark-green);
`