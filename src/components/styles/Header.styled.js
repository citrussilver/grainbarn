import styled from 'styled-components'

export const StyledHeader = styled.header`
    font-family: var(--special-font);
    font-weight: 300;
    font-size: 2rem;
    background-color: #464F41;
    padding: 2rem 2.5rem;
    color: #fff;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
    }
`