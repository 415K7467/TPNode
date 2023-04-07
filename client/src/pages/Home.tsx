export default function Home (){
    const load = async () => {
        const data = await window.fetch('/api/hello')
        const json = await data.json()
        console.log(json.message)
    }

    return (
        <div className="content">
            <h1>Choix du Kwiz</h1>
            <ul onLoad={load}>
                <li>
                    <h2></h2>
                </li>
            </ul>
        </div>
    );
}