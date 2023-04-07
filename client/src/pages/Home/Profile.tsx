import {useState} from "react";

export default function Profile() {
    const [userName, setUserName] = useState<string>('');
    const annonceNumber: number = 0;
    const commentNumber: number = 0;

    const handelClick = () => {
        console.log('valider');
    }

    return (
        <div>
            <h1>{userName}</h1>
            <div>
                <span>
                    <label htmlFor="userName">Changer mon nom d'utilisateur</label>
                    <input type="text" id="userName" onChange={() => {
                        setUserName((document.getElementById('userName') as HTMLInputElement).value);
                    }}/>
                </span>
                <div>
                    <h2>Statistiques</h2>
                    <div>
                        <h3>Nombre d'annonces</h3>
                        <p>{annonceNumber}</p>
                    </div>
                    <div>
                        <h3>Nombre de commentaires</h3>
                        <p>{commentNumber}</p>
                    </div>
                </div>
                <div className="onClick" onClick={handelClick}>
                    <p>Valider</p>
                </div>
            </div>
        </div>
    )
}