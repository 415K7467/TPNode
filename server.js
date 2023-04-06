const express = require('express')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 7000
const app = express()

app.use(express.json())

app.use(express.static('client/build'))


app.get('/api/hello', (_, res) => {
    res.send({message: 'Hello World!'})
})

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})