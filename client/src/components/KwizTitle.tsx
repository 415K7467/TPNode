import React, {useEffect, useState} from "react"

interface Answer {
    response: string,
    correct: boolean
}

interface Question {
    question: string,
    responses: Answer[]
}

interface Topic {
    title: string,
    questions: Question[]
}

export default function KwizTitle() {
    const [kwizs, setKwizs] = useState<Topic[]>([]);

    useEffect(() => {
        window.fetch('/api/kwizs').then(data => data.json()).then(newKwizs => setKwizs(newKwizs))
    }, []);

    return (
        <div className="content">
            <ul>
                {kwizs.map((kwiz) => (
                    <li>
                        <h2>{kwiz.title}</h2>
                        <p>{kwiz.questions.length}</p>
                    </li>
                ))}
            </ul>


        </div>
    );
}