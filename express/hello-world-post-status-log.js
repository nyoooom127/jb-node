const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

const postLogger = require('./middleware/post-status-log');

app.use(express.urlencoded({ extended: false }));

app.post('*', postLogger);

app.post('/', (req, res) => {
    return res.status(203).end('success');
});

app.post('/data', (req, res) => {
    return res.status(200).end('success data');
});

app.get('/', (req, res) => {
    res.send('authorized');
});

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`);
});
