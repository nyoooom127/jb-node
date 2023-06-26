const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

app.use(express.urlencoded({ extended: false }));

app.post('/data', (req, res) => {
    res.send(`id: ${req.body.id}`);
});

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`);
});


// // hint
// app.{method}('/path/:param', () => {})
// console.log(req)

