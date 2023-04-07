import React from 'react';
import './App.css';

import Home from './pages/Home'
import NewKwiz from './pages/NewKwiz'
import History from './pages/History'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";


const App = () => {

    return (
        <main>
            <BrowserRouter>
                <div className="navigation">
                    <h1>Mon application de Todos</h1>
                    <NavLink to="/">KWIZ</NavLink>
                    <NavLink to="/newKwiz">Créer un Kwiz</NavLink>
                    <NavLink to="/history">Historique</NavLink>
                </div>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/newKwiz" element={<NewKwiz/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
