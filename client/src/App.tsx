import React from 'react';
import './App.css';

import HomeList from './components/HomeList'
import NewKwiz from './components/NewKwiz'
import History from './components/History'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";


const App = () => {

    return (
        <main>
            <BrowserRouter>
                <div className="navigation">
                    <h1>Mon application de Todos</h1>
                    <NavLink to="/">Jouer</NavLink>
                    <NavLink to="/newKwiz">Créer un Kwiz</NavLink>
                    <NavLink to="/history">Historique</NavLink>
                </div>
                <Routes>
                    <Route index element={<HomeList/>}/>
                    <Route path="/newKwiz" element={<NewKwiz/>}/>
                    <Route path="/postIt" element={<History/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
