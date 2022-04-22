import styled from 'styled-components'

export const StyledFooter = styled.footer`
    font-family: var(--special-font);
    font-weight: 300;
    background-color: var(--pale-brown);
    padding: 2rem 1rem;
    color: #fff;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
    }
`