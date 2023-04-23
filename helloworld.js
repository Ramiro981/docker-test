// var express = require('express')
// var app = express()
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(8081, _ => console.log('app listening on port 8081!'));

const express = require('express')
const app = express()
const port = 4000
app.get('/', (request, response) => {
  response.send('Primera API!')
})
app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})