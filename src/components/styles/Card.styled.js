import styled from 'styled-components'

const handleColorType = color => {
    switch (color) {
        case "color1":
            return "#ffeee2";
        case "color2":
            return "#eefcef";
        case "color3":
            return "#e6f5fa";
        case "color4":
            return "#f4f5f9";
        default:
            return "#f9f8f3";
    }
};

export const StyledCard = styled.div`
    background-color: ${({bgColor}) => handleColorType(bgColor)};
    margin: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
`

export const StyledTitle = styled.div`
    font-weight: 400;
`