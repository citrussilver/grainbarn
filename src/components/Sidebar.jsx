import React from 'react'
import { StyledBrandLogo, StyledMenu } from './styles/Sidebar.styled'

function Sidebar() {
    return (
        <div>
            {/* <StyledBrandLogo><i className="fa-solid fa-wheat-awn mr-2"></i><h1>grainbarn</h1></StyledBrandLogo> */}
            <StyledMenu><span className="material-icons ml-4">home</span> <label className="ml-4">Home</label></StyledMenu>
            <StyledMenu><span className="material-icons ml-4">grid_view</span> <label className="ml-4">Dashboard</label></StyledMenu>
            <StyledMenu><span className="material-icons ml-4">build</span> <label className="ml-4">Settings</label></StyledMenu>
        </div>
    )
}

export default Sidebar