import KwizTitle from "../components/KwizTitle";
import "../styles/Home.css"

export default function Home (){
    return (
        <div className="content">
            <h1>Choix du Kwiz</h1>
            <KwizTitle/>
            <form>
                <label htmlFor="name">Mon nom</label>
                <input type="text" id="name"/>
                <button type="submit">Jouer</button>
            </form>
        </div>
    );
}