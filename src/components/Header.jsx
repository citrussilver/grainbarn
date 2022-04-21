import React from "react";
import { StyledHeader } from './styles/Header.styled'

function Header() {
    return (
        <StyledHeader>
            <div>
                <h1><i className="fa-solid fa-wheat-awn mr-2"></i>grainbarn</h1>
            </div>
            <div className="flex">
                <h4>Hello admin!</h4>
                <h4 className="ml-4 mr-2">Logout</h4>
            </div>
        </StyledHeader>
    )
}

export default Header;