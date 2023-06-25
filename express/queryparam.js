const express = require('express')
const app = express()
const port = 3000
const host = 'localhost';

app.get('/', (req, res) => {
    res.send(req.query.id)
})

app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
})


// // hint
// app.{method}('/path/:param', () => {})
// console.log(req)

