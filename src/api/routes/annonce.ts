import * as path from 'path';
import express from "express";

require('dotenv').config()

const route = express()

route.use(express.json())

route.use(express.static('client/build'))

route.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

route.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

export default route;