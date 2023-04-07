import React from 'react';
import './App.css';

import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Connection from './pages/Connection';
import Home from "./pages/Home";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connection/>}/>
                <Route path="/home">
                    <Route path="" element={<Home/>}/>
                    <Route path="myannonces" element={<div>MyAnnonces</div>}/>
                    <Route path="annonces" element={<div>Annonces</div>}/>
                    <Route path="profile" element={<div>Profile</div>}/>
                </Route>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
