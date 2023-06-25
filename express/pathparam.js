const express = require('express')
const app = express()
const port = 3000
const host = 'localhost';

app.post('/user/:id', (req, res) => {
    res.send(`user: ${req.params.id}`)
})

app.delete('/ticket/:id', (req, res) => {
    res.send(`ticket: ${req.params.id}`)
})

app.patch('/employee/:id', (req, res) => {
    res.send(`employee: ${req.params.id}`)
})

app.put('/organization/:id', (req, res) => {
    res.send(`organization: ${req.params.id}`)
})

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
})


// // hint
// app.{method}('/path/:param', () => {})
// console.log(req)

