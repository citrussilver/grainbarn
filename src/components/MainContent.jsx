import React from "react";
import { StyledMainContent, StyledArticle } from './styles/MainContent.styled'
import Sidebar from "./Sidebar";
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import DataView from '../pages/DataView';
import Settings from '../pages/Settings';

function MainContent() {

    return (
        <StyledMainContent>
            <aside className="sidebar-menu">
                <Sidebar />
            </aside>
            <StyledArticle>
                <Routes>
                    <Route path='/' element={<Dashboard />}></Route>
                    <Route path='/dataview' element={<DataView />}></Route>
                    <Route path='/settings' element={<Settings />}></Route>
                </Routes>
            </StyledArticle>
        </StyledMainContent>
    )
}

export default MainContent;