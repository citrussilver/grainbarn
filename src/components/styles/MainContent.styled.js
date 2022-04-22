import styled from 'styled-components'

export const StyledMainContent = styled.div`
    background-color: var(--pale-green);
    font-family: var(--commont-font);
    font-weight: 100;
    display: grid;
    grid-template-columns: 0.2fr 1fr;

    @media (max-width: 768px) {
        display: block;
        padding: 1rem 0;
    }
`
export const StyledArticle = styled.article`
    border-style: hidden dashed hidden;
    border-color: var(--pale-dark-green);
`