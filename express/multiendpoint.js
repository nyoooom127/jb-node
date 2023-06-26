const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';

app.post('/user', (req, res) => {
    res.send('user');
});

app.delete('/ticket', (req, res) => {
    res.send('ticket');
});

app.patch('/employee', (req, res) => {
    res.send('employee');
});

app.put('/organization', (req, res) => {
    res.send('organization');
});

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`);
});;


// // hint
// app.{method}('/path/:param', () => {})
// console.log(req)

