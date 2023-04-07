import React from 'react';

import MyAnnonces from '../pages/Home/MyAnnonces';
import Annonces from '../pages/Home/Annonces';
import Profile from '../pages/Home/Profile';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";


const App = () => {

    return (
        <main>
            <BrowserRouter>
                <div className="navigation">
                    <h1>Mon application de Todos</h1>
                    <NavLink to="/myannonces">Mes annonces</NavLink>
                    <NavLink to="/annonces">Les annonces</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <Routes>
                    <Route path="/myannonces" element={<MyAnnonces/>}/>
                    <Route path="/annonces" element={<Annonces/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
