import React from 'react'
import { StyledBrandLogo, StyledMenu } from './styles/Sidebar.styled'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            {/* <StyledBrandLogo><i className="fa-solid fa-wheat-awn mr-2"></i><h1>grainbarn</h1></StyledBrandLogo> */}
            <Link to="/">
                <StyledMenu>
                    <span className="material-icons ml-4">grid_view</span><label className="ml-4 cursor-pointer">Dashboard</label>
                </StyledMenu>
            </Link>
            <Link to="/dataview">
                <StyledMenu>
                    <span className="material-icons ml-4">bar_chart</span><label className="ml-4 cursor-pointer">Data</label>
                </StyledMenu>
            </Link>
            <Link to="/settings">
                <StyledMenu>
                    <span className="material-icons ml-4">build</span><label className="ml-4 cursor-pointer">Settings</label>
                </StyledMenu>
            </Link>
            <StyledMenu><span className="material-icons ml-4">logout</span> <label className="ml-4 cursor-pointer">Logout</label></StyledMenu>
        </div>
    )
}

export default Sidebar