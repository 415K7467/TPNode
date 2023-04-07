import express = require('express');
import * as path from 'path';

import api from './api';
import {connection} from './api/config/database';

const PORT = process.env.PORT ? +process.env.PORT : 7000;
const app = express();

app.use(express.json());
app.use('/api', api);

connection()
    .then(() => {
            app.get('/*', (_, res) => {
                res.sendFile(path.join(__dirname, './client/build/index.html'))
            });

            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        }
    ).catch((error) => console.error('DB Error', error))
