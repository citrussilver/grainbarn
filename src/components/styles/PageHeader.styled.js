import styled from 'styled-components'

export const StyledPageHeader = styled.div`
    font-size: 2rem;
    margin-top: 1rem;
    padding: 1rem 1rem;
    border-radius: 1rem;

    &::after {
        margin-top: 0.6rem;
        display: block;
        content:'';
        background-color: #614124;
        width: calc(100%);
        height: 2px;
    }
`