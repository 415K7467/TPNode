type titleProps = {
    title: string;
}

export default function TitleResearchBar(props: titleProps) {
    return (
        <div>
            <div className="titleResearchBar">
                <h1>{props.title}</h1>
                <div className="recherche">
                    <input type="text" placeholder="Rechercher une annonce"/>
                </div>
            </div>
        </div>
    )
}