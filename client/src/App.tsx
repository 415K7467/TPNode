import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [message, setMessage] = React.useState('');
    const handelClick = async () => {
        const data = await fetch('/api/hello');
        const json = await data.json();
        setMessage(json.message);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button onClick={handelClick}>
                    click me
                </button>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
