import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


export default function Connection() {

    interface isState {
        state: 'login' | 'register';
    }

    const [identifiant, setIdentifiant] = useState<String>('');

    const [state, setState] = useState<isState>({state: 'login'});
    type DataUser = {
        id: number;
        identifiant: string;
    }

    const navigate = useNavigate()

    const input = () => {
        setIdentifiant((document.getElementById('identifiant') as HTMLInputElement).value);
    }
    const handelclick = () => {
        console.log('handelclick');
        if (state.state === 'login') {
            setState({state: 'register'});
        } else {
            setState({state: 'login'});
        }
    }

    const dataRequest = () => {
        console.log('dataRequest');
        console.log(state, ':', identifiant);
        if (state.state === 'login' && identifiant !== '') {
            login().then(r => console.log(r));
        } else if (state.state === 'register' && identifiant !== '') {
            register();
        }
    }

    const login = async () => {
        try {
            const response = await fetch(`/users`)
            const data: DataUser = await response.json();
            if (data.identifiant === identifiant) {
                //redirection vers la page d'accueil /home
                console.log('identifiant correct');
                navigate('/home');
            } else {
                console.log('identifiant  incorrect');
            }
        } catch (e) {
            console.log(e);
        }
    }

    const register = async () => {
        try {
            setIdentifiant(identifiant)
            const response = await fetch(`/users/create`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({a: 1, b: 'Textual content'})
            });
            const data: DataUser = await response.json();
            console.log(data);
            //redirection vers la page d'accueil /home
            navigate('/home');

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="connecter">
            {state.state === 'login' ? <h1>Se connecter</h1> : <h1>S'inscrire</h1>}
            <span>
                <label htmlFor="identifiant">Identifiant</label>
                <input onInput={input}  type="text" id="identifiant" name="identifiant" />
                <div onClick={dataRequest}>Se Connecter</div>
            </span>
            <div className="switch">
                {state.state === 'login' ?
                    <p onClick={handelclick}>Pas encore de compte ? S'inscrire</p> :
                    <p onClick={handelclick}>Déjà un compte ? Se connecter</p>
                }
            </div>
        </div>
    )
}