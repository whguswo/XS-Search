const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log('Running at ' + PORT);
})