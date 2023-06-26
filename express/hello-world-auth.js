const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

const authMiddleware = require('./middleware/auth');

app.use(authMiddleware);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('authorized');
});

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`);
});
