import express from 'express';
import * as path from 'path';

require('dotenv').config()

const PORT = process.env.PORT ? +process.env.PORT : 7000
const app = express()

app.use(express.json())

app.use(express.static('client/build'))


app.get('/api/kwizs', (_, res) => {
    res.json([
        {
            title: 'geography',
            questions: [
                {
                    question: 'What is the capital of France?',
                    responses: [
                        {
                            response: 'Paris',
                            correct: true
                        },
                        {
                            response: 'London',
                            correct: false
                        },
                        {
                            response: 'Berlin',
                            correct: false
                        },
                        {
                            response: 'Madrid',
                            correct: false
                        }
                    ]
                },
                {
                    question: 'What is the capital of Germany?',
                    responses: [
                        {
                            response: 'Paris',
                            correct: false
                        },
                        {
                            response: 'London',
                            correct: false
                        },
                        {
                            response: 'Berlin',
                            correct: true
                        },
                        {
                            response: 'Madrid',
                            correct: false
                        }
                    ]
                },
                {
                    question: 'What is the capital of Spain?',
                    responses: [
                        {
                            response: 'Paris',
                            correct: false
                        },
                        {
                            response: 'London',
                            correct: false
                        },
                        {
                            response: 'Berlin',
                            correct: false
                        },
                        {
                            response: 'Madrid',
                            correct: true
                        }
                    ]
                },
                {
                    question: 'What is the capital of England?',
                    responses: [
                        {
                            response: 'Paris',
                            correct: false
                        },
                        {
                            response: 'London',
                            correct: true
                        },
                        {
                            response: 'Berlin',
                            correct: false
                        },
                        {
                            response: 'Madrid',
                            correct: false
                        }
                    ]
                }
            ]
        },
        {
            title: 'history',
            questions: [
                {
                    question: 'When did the second world war start?',
                    responses: [
                        {
                            response: '1939',
                            correct: true
                        },
                        {
                            response: '1940',
                            correct: false
                        },
                        {
                            response: '1941',
                            correct: false
                        },
                        {
                            response: '1942',
                            correct: false
                        }]
                },
                {
                    question: 'When did the first world war start?',
                    responses: [
                        {
                            response: '1914',
                            correct: true
                        },
                        {
                            response: '1915',
                            correct: false
                        },
                        {
                            response: '1916',
                            correct: false
                        },
                        {
                            response: '1917',
                            correct: false
                        }]
                }]
        },
        {
            title: 'science',
            questions: [
                {
                    question: 'What is the chemical formula for water?',
                    responses: [
                        {
                            response: 'H2O',
                            correct: true
                        },
                        {
                            response: 'H2O2',
                            correct: false
                        },
                        {
                            response: 'H2O3',
                            correct: false
                        },
                        {
                            response: 'H2O4',
                            correct: false
                        }
                    ]
                },
                {
                    question: 'What is the chemical formula for oxygen?',
                    responses: [
                        {
                            response: 'O2',
                            correct: true
                        },
                        {
                            response: 'O3',
                            correct: false
                        },
                        {
                            response: 'O4',
                            correct: false
                        },
                        {
                            response: 'O5',
                            correct: false
                        }
                    ]
                }
            ]
        },
    ])
})

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})