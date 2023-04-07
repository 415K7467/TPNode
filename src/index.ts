import express = require('express');
import * as path from 'path';

import api from './api';
import {connection} from './api/config/database';
import {UserService} from "./api/services/User";

const PORT = process.env.PORT ? +process.env.PORT : 7000;
const app = express();

app.use(express.json());
app.use('/api', api);

connection()
    .then(() => {
            app.get('/users',
                (_, res) => {
                const users = UserService.getAllUser();
                res.send(users);
            });
            app.post('/users/create',
                (req , res) => {
                const user =req.body;
                UserService.createUser(user);
                res.send(user);
            });
            app.get('/*', (_, res) => {
                res.sendFile(path.join(__dirname, './client/build/index.html'))
            });

            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        }
    ).catch((error) => console.error('DB Error', error))
