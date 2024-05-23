import express from 'express';

import 'dotenv/config';

import mongoConfig from './config.js';

const app = express();

const port = 3000;

app.get('/', () => (req, res) => {
    res.json('Hello! (from Server)')
});

app.listen(port, () => {
    console.log('Listening on port: ' + port)
    mongoConfig()
});