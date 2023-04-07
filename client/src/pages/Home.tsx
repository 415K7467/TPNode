import React, {useState} from 'react';
import '../styles/TitleResearchBar.css';

import MyAnnonces from '../pages/Home/MyAnnonces';
import Annonces from '../pages/Home/Annonces';
import Profile from '../pages/Home/Profile';
import UnderHeader from "../components/TitleResearchBar";

const App = () => {

    interface content {
        content: 'MyAnnonces' | 'Annonces' | 'Profile';
    }

    const [content, setContent] = useState<content>({content: 'MyAnnonces'});

    return (
        <main>
                <div className="navigation">
                    <h1>Mon application de Todos</h1>
                    <h2 onClick={() => {setContent( {content : 'MyAnnonces'});}}>Mes annonces</h2>
                    <h2 onClick={() => {setContent( {content : 'Annonces'});}}>Les annonces</h2>
                    <h2 onClick={() => {setContent( {content : 'Profile'});}}>Profile</h2>
                </div>
                <div className="content">
                    {content.content === 'MyAnnonces' && <MyAnnonces/>}
                    {content.content === 'Annonces' && <Annonces/>}
                    {content.content === 'Profile' && <Profile/>}
                </div>
        </main>
    );
}

export default App;
