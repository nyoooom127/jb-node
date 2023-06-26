const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

const error = require('./middleware/error');
const notFound = require('./middleware/404');

app.use(express.urlencoded({ extended: false }));

app.post('/data', (req, res, next) => {
    if (!req.body.id) {
        return next('Id required');
    }

    return res.send(`id: ${req.body.id}`);

});

app.get('/id', (req, res) => {
    res.send('id');
});

app.use(notFound);

app.use(error);

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`);
});
